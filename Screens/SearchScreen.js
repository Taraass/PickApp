import React from 'react'

import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {db} from '../firebaseStorage'
import { collection, query, where, getDocs } from "firebase/firestore";

export default class SearchScreen extends React.Component {

    state = {
        arrival: "",
        depart: "",
        numberOfPass: ""
    }


   Search = async() => {
       try {
           const q = query(collection(db, "Trip"), where("arrive", "==", "Kyiv"));

           const querySnapshot = await getDocs(q);
           querySnapshot.forEach((doc) => {
               // doc.data() is never undefined for query doc snapshots
               this.setState({depart:doc.data().departune})
               this.setState({arrival:doc.data().arrive})
           });
       } catch (e) {
           alert("Error adding document: ", e);
       }
   }
 render()
    {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.mainpicture}
                    source={require('../img/photo2.png')}
                />
                <View style={styles.modal}>
                    <Text>{this.state.arrival}</Text>
                    <Text>{this.state.depart}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.Search()}>
                        <Text style={{color: "#fff", fontWeight: "500"}}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"

    },
    mainpicture: {
        marginTop: 0,
        width: '100%',
        height: 300,
    },
    modal: {
        width: '80%',
        height: 200,
        marginTop: 20,
        paddingTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: 'space-between'
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
    textToday: {
        color: 'grey',
        marginTop: 6,
        fontSize: 18,
    },
    iconDate:{
        color: 'grey',
        marginLeft: 30,
        marginRight: 15
    },
    iconPerson: {
        color: 'grey',
        marginLeft: '14%',
        marginRight: 15
    },
    place: {
        marginTop: 40,
        flexDirection: "row",
    },
    number: {
        color: 'grey',
        marginTop: 2,
        fontSize: 18,
    }

});
