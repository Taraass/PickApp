import React , { useState, useEffect }from 'react'
import {View,Platform, Text,TextInput, StyleSheet, Image,ImageBackground,ScrollView,Button,TouchableOpacity} from 'react-native'
import { updateProfile  } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {db} from '../firebaseStorage'
import { auth } from '../firebaseAuth';
import * as ImagePicker from 'expo-image-picker';


export default function  EditScreen ({ navigation: { navigate }}){
    const [image, setImage] = useState(null);
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [gender, setGender] = useState('')
    const [carBrand, setCarBrand] = useState('')
    const [carColor, setCarColor] = useState('')
    const [imageExists, setImageExists] = useState(false)


    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImageExists(true)
            setImage(result.uri);

        }
    };

    test = () => {
        if(typeof(image) == 'string') {
            updateProfile(auth.currentUser, {displayName: name, photoURL: image})
                .then(() => {
                    console.log('Імя змінено')
                }).catch((error) => {
                console.log(error.message)
            })
        } else {
            console.log('Fuck that shit')
        }
    }
    const storeData = async() => {
        try {
            if(name !== '') {
                test();
                const user = auth.currentUser;
                await setDoc(doc(db, "User", user.uid), {
                    name: name,
                    phoneNumber: phoneNumber,
                    gender: gender,
                    carBrand: carBrand,
                    carColor: carColor
                });
                console.log("Запис в бд створено")
                alert('Дані відредаговані')
                navigate('Profile');
                } else {
                alert('Заповни імя')
            }
        } catch (e) {
            console.log(e.message)
        }
    }


        return (
            <ScrollView style={styles.container}>
                <ImageBackground
                    source={require('../img/backProfile.jpg')}
                    style={styles.upPart}>
                    <View style={styles.avatarContainer}>
                        { !imageExists ?
                        <TouchableOpacity onPress={()=> pickImage()}>
                            <Image source={require('../img/imgno.jpg')} style={styles.avatar}/>
                        </TouchableOpacity>
                        :
                        <Image source={{ uri: image }} style={styles.avatar} />
                        }
                    </View>
                </ImageBackground>
                <View style={styles.about}>
                    <Text style={styles.text}>Profile</Text>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Name</Text>
                        <TextInput style = {styles.resultTitle}
                            onChangeText={name =>setName(name) }
                            value={name}/>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Phone number</Text>
                        <TextInput style = {styles.resultTitle}
                            keyboardType="numeric"
                            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                            value={phoneNumber}/>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Gender</Text>
                        <TextInput style = {styles.resultTitle}
                            onChangeText={gender => setGender(gender)}
                            value={gender}/>
                    </View>
                    <Text style={styles.text}>About me</Text>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Preferences</Text>
                    </View>
                    <Text style={styles.text}>Car information</Text>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Car brand</Text>
                        <TextInput style = {styles.resultTitle}
                            onChangeText={carBrand => setCarBrand(carBrand)}
                            value={carBrand}/>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Car color</Text>
                        <TextInput style = {styles.resultTitle}
                            onChangeText={carColor => setCarColor(carColor)}
                            value={carColor}/>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => storeData()}>
                    <Text style={{color: "#fff", fontWeight: "500"}}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarContainer: {
        marginTop: '25%',
        shadowColor: "#151734",
        shadowRadius: 20,
        shadowOpacity: 0.4,
    },
    upPart:{
        alignItems: "center",
        height: 270
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 68,
        backgroundColor: '#fff'
    },
    name: {
        margin: 24,
        fontWeight: 'bold',
        color: '#e6ffff',
        fontSize: 27
    },
    button: {
        margin: '5%',
        width: '90%',
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
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputTitle: {
        color: '#2a9ed2',
        fontSize: 18,
        fontWeight: 'bold',
    },
    resultTitle: {
        backgroundColor: '#e2e3ef',
        borderWidth: 0.6,
        width: '50%',
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


