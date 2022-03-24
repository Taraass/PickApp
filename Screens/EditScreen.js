import React , { useState, useEffect }from 'react'
import {View,Platform, Text,TextInput, StyleSheet, Image,ImageBackground,ScrollView,Button,TouchableOpacity} from 'react-native'
import { updateProfile  } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {db} from '../firebaseStorage'
import { auth } from '../firebaseAuth';
import * as ImagePicker from 'expo-image-picker';


export default function  EditScreen (){
    const [image, setImage] = useState(null);
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState('')
    const [gender, setGender] = useState('')
    const [carBrand, setCarBrand] = useState('')
    const [carColor, setCarColor] = useState('')


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
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };



    /*state = {
        userid: "",
        name: "",
        phoneNumber: "",
        gender: "",
        carBrand: "",
        carColor: "",
    };

    test = () => {
        updateProfile(auth.currentUser, {displayName: this.state.name})
        .then(()=>{
            console.log('Імя змінено')
        }).catch((error)=> {
            console.log(error.message)
        })
    }
    storeData = async() => {
        try {
            console.log('   ')
            this.test();
            const user = auth.currentUser;
            this.state.userid = user.uid;
            console.log('User id:', this.state.userid);
            await setDoc(doc(db, "User", this.state.userid), {
                name: this.state.name,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                carBrand: this.state.carBrand,
                carColor: this.state.carColor
            });
            console.log("Запис в бд створено")
            alert('Дані відредаговані')
            this.props.navigation.navigate('Home');
        } catch (e) {
            console.log(e.message)
        }
    }
*/

        return (
            <ScrollView style={styles.container}>
                <ImageBackground
                    source={require('../img/backProfile.jpg')}
                    style={styles.upPart}>
                        <View style={styles.avatarContainer}>
                            {image && <Image source={{ uri: image }} style={styles.avatar} />}
                            <Button title="Pick an image from camera roll" onPress={pickImage} />
                        </View>
                    <Text style={styles.name}>{"Bodialok"}</Text>
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
                <TouchableOpacity style={styles.button} onPress={() => this.storeData()}>
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
        marginTop: '18%',
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


