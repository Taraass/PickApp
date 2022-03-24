import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { collection, addDoc} from "firebase/firestore";
import {auth} from '../firebaseAuth';
import {db} from '../firebaseStorage'

export default class PostScreen extends React.Component {

    state = {
        arrival: "",
        depart: "",
        driverName: ""
    }

    storeData = async() => {
        try {
            const user = auth.currentUser;
            this.state.driverName = user.displayName;
            await addDoc(collection(db, "Trip"), {
              arrive: this.state.arrival,
              departune: this.state.depart,
              driver: this.state.driverName
            });
            alert("Поїздку додано!");
        } catch (e) {
            alert("Error adding document: ", e);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.mainpicture}
                    source={require('../img/logoTestfree.jpg')}
                >
                    <View style={styles.modal}>
                <AntDesign name="caretdown" size={18} color="black" />
                    <TextInput style ={styles.input} autoCapitalize = "none"
                        onChangeText={depart => this.setState({depart})}
                        value={this.state.depart}
                        placeholder='Route from ...'/>
                <AntDesign name="caretdown" size={18} color="black" />
                </View>
                <View style={styles.modal}>
                <AntDesign name="caretup" size={18} color="black" />
                    <TextInput style ={styles.input} autoCapitalize = "none"
                        onChangeText={arrival => this.setState({arrival})}
                        value={this.state.arrival}
                        placeholder='Route to ...'/>
                <AntDesign name="caretup" size={18} color="black" />
                </View>
                <View style={styles.modal2}>
                <Text style = {styles.textQuestion}>{'When are you going to ride?'}</Text>
                <TouchableOpacity style={styles.place} onPress={() => alert('Треба, щоб хтось зробив ту дату, бляха')}>
                    <MaterialIcons name="date-range" style={styles.iconDate} size={30} color="black" />
                    <Text style = {styles.textToday}>{'Today'}</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => this.storeData()}>
                    <Text style={{color: "#fff", fontWeight: "500"}}>Create a trip</Text>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    mainpicture: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: "center",
        marginTop: 0,
        width: '100%',
        height: '100%',
    },
    modal: {
        width: '80%',
        height: 80,
        marginTop: 20,
        paddingTop: 10,
        padding:'2%',
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: "wrap"
    },
    modal2: {
        width: '80%',
        height: 100,
        marginTop: 20,
        paddingTop: 10,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: "wrap"
    },
    input: {
        borderBottomColor: "#373f9e",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 50,
        marginLeft: 10,
        width: '80%',
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        width: '80%',
        backgroundColor: "#2a9ed2",
        margin: 20,
        borderRadius: 20,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    textQuestion: {
        marginLeft: 27,
        marginTop: 11,
        fontSize: 17
    },
    textToday: {
        color: 'grey',
        marginTop: 6,
        fontSize: 18,
    },
    iconDate:{
        color: 'grey',
        marginLeft: '20%',
        marginRight: 15
    },
    iconPerson: {
        color: 'grey',
        marginLeft: '30%',
        marginRight: 15
    },
    place: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: 'center',
    },
    number: {
        color: 'grey',
        marginTop: 2,
        fontSize: 18,
    }
});
