import React, { useState } from 'react'

import {View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function HomeScreen({ navigation: { navigate } }) {

    const [departune, setDepartune] = useState("")
    const [arrival, setArrival] = useState("")
    const [numberOfPass, setNumberOfPass] = useState("")

        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.mainpicture}
                    source={require('../img/logoTest2.jpg')}
                >
                    <View style={styles.modal}>
                <Entypo name="chevron-small-left" size={24} color="black" />
                    <TextInput style ={styles.input} autoCapitalize = "none"
                        onChangeText={departune => setDepartune(departune)}
                        value={departune}
                        placeholder='Route from ...'/>
                <Entypo name="chevron-small-right" size={24} color="black" />
                <Entypo name="chevron-small-left" size={24} color="black" />
                    <TextInput style ={styles.input} autoCapitalize = "none"
                        onChangeText={arrival => setArrival(arrival)}
                        value={arrival}
                        placeholder='Route to ...'/>
                <Entypo name="chevron-small-right" size={24} color="black" />
                <TouchableOpacity style={styles.place} onPress={() => alert('Треба, щоб хтось зробив ту дату, бляха')}>
                    <MaterialIcons name="date-range" style={styles.iconDate} size={30} color="black" />
                    <Text style = {styles.textToday}>{'Today'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.place} onPress={() => setNumberOfPass(numberOfPass)}>
                    <Ionicons name="person" style={styles.iconPerson} size={24} color="black" />
                    <TextInput style = {styles.number}>{'1'}</TextInput>
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigate("Search", {depart: departune, arr: arrival})}>
                    <Text style={{color: "#fff", fontWeight: "500"}}>Search</Text>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        

    },
    mainpicture: {
        marginTop: 0,
        alignItems: "center",
        width: '100%',
        height: '100%'
    },
    modal: {
        width: '80%',
        height: 200,
        marginTop: '100%',
        paddingTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: "row",
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
        fontSize: 18
    }

});
