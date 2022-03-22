import React from 'react'
import {View, Text, StyleSheet, Image, TextInput} from 'react-native'
import {getDatabase, ref, child, get} from "firebase/database";

export default class HomeScreen extends React.Component {

    state = {
        arrival: "",
        depart: ""
    }
    render() {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `trip/departune`))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    this.setState({arrival: snapshot.val()});
                }else{
                    alert('Sorry, there are no records on database');
                }
            }).catch((error) => {
                alert(error.message);
        });
        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../img/photo2.png')}
                />
                <View>
                    <Text style = {styles.inputTitle}>{this.state.arrival}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tinyLogo: {
        marginTop: 0,
        width: '100%',
        height: 300,
    },
    logo: {
        width: 66,
        height: 58,
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 30,
        fontSize: 15,
        color: "#161F3D"
    },
});