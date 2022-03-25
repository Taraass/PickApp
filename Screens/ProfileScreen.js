import React, {useEffect, useState} from 'react'
import {View, Text,Button, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView, Platform} from 'react-native'
import {auth} from "../firebaseAuth";
import { useFocusEffect } from "@react-navigation/native";
import {db} from '../firebaseStorage'
import { doc, getDoc } from "firebase/firestore";
import {launchImageLibrary} from "react-native-image-picker";
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen({ navigation: { navigate }})  {

    const [image, setImage] = useState("");
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState('')
    const [gender, setGender] = useState('')
    const [carBrand, setCarBrand] = useState('')
    const [carColor, setCarColor] = useState('')
    const [email,setEmail] = useState('')
    const [imageExists, setImageExists] = useState(false)

    useFocusEffect(
        React.useCallback(() => {
                const user = auth.currentUser;
                setEmail(user.email);
                const fetchData = async() => {
                    try {
                        if (user !== null) {
                            const docRef = doc(db, "User", user.uid);
                            const docSnap = await getDoc(docRef);
                            if (docSnap.exists()) {
                                console.log("Document data:", docSnap.data());
                                setName((docSnap.data().name));
                                setPhoneNumber((docSnap.data().phoneNumber));
                                setGender((docSnap.data().gender));
                                setCarBrand((docSnap.data().carBrand));
                                setCarColor((docSnap.data().carColor));
                                setImage(user.photoURL);
                                setImageExists(true)
                            } else {
                                console.log("No such document!");
                            }
                        } else {
                            console.log('Bye')
                        }
                    } catch (e) {
                        console.log(e);
                    }
                };

                fetchData().then();
        }, [])
    )

    const handleLogOut = () => {
        auth.signOut()
            .then()
            .catch((error) => {
                alert(error.message);
            })
    };
        return (
            <ScrollView style={styles.container}>
                <ImageBackground
                style={styles.upPart}
                source={require('../img/backProfile.jpg')}>
                    <View style={styles.avatarContainer}>
                        { !imageExists ?
                            <Image
                                source={require('../img/no-img.jpg')}
                                style={styles.avatar}
                            />
                            :
                            <Image source={{ uri: image }} style={styles.avatar} />
                        }

                    </View>
                    <Text style={styles.name}>{name}</Text>
                </ImageBackground>
                <View style={styles.about}>
                    <Text style={styles.text}>Profile</Text>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Name</Text>
                        <Text style = {styles.resultTitle}>{name}</Text>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Phone number</Text>
                        <Text style = {styles.resultTitle}>{phoneNumber}</Text>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Gender</Text>
                        <Text style = {styles.resultTitle}>{gender}</Text>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Email</Text>
                        <Text style = {styles.resultTitle}>{email}</Text>
                    </View>
                    <Text style={styles.text}>About me</Text>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Preferences</Text>
                    </View>
                    <Text style={styles.text}>Car information</Text>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Car brand</Text>
                        <Text style = {styles.resultTitle}>{carBrand}</Text>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Car color</Text>
                        <Text style = {styles.resultTitle}>{carColor}</Text>
                    </View>
                </View>
                <View style={styles.buttonPart}>
                <TouchableOpacity style={styles.button} onPress={() => handleLogOut()}>
                    <Text style={{color: "#fff", fontWeight: "500"}}>Log out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigate("Edit")}>
                    <Text style={{color: "#fff", fontWeight: "500"}}>Edit profile</Text>
                </TouchableOpacity>
                </View>
            </ScrollView >
        );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    avatarContainer: {
        marginTop: '15%',
        shadowColor: "#151734",
        shadowRadius: 20,
        shadowOpacity: 0.4
    },
    upPart:{
        alignItems: "center",
        height: 270
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 68
    },
    name: {
        margin: 24,
        fontWeight: 'bold',
        color: '#e6ffff',
        fontSize: 27
    },
    buttonPart: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: '10%'
    },
    button: {
        margin: 2,
        width: '45%',
        backgroundColor: "#2a9ed2",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    about: {
        justifyContent: 'center',
    },
    text: {
        margin: 15,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18
    },
    rows: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputTitle: {
        color: '#2a9ed2',
        fontSize: 18,
        fontWeight: 'bold',
    },
    resultTitle: {
        color: '#334700',
        fontSize: 18,
        fontWeight: 'bold',
    },
    edit: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
    },
});


