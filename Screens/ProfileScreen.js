import React from 'react'
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import {auth} from "../firebaseAuth";
import {launchImageLibrary} from "react-native-image-picker";
import * as ImagePicker from 'expo-image-picker';

export default class ProfileScreen extends React.Component {

    state = {
        name: "",
        phoneNumber: "",
        email: "",
        carBrand: "",
        carColor: ""
    };

    
    handleLogOut = () => {
        auth.signOut()
            .then()
            .catch((error) => {
                alert(error.message);
            })
    };

    render() {
        const user = auth.currentUser;
        if(user !== null) {
            this.state.name = user.displayName;
            this.state.email = user.email;
        }
        return (
            <ScrollView style={styles.container}>
                <ImageBackground
                style={styles.upPart}
                source={require('../img/backProfile.jpg')}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={this.state.image}
                            style={styles.avatar}
                        />
                    </View>
                    <Text style={styles.name}>{this.state.name}</Text>
                </ImageBackground>
                <View style={styles.about}>
                    <Text style={styles.text}>Profile</Text>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Name</Text>
                        <Text style = {styles.resultTitle}>{this.state.name}</Text>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Phone number</Text>
                        <Text style = {styles.resultTitle}>{this.state.phoneNumber}</Text>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Gender</Text>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Email</Text>
                        <Text style = {styles.resultTitle}>{this.state.email}</Text>
                    </View>
                    <Text style={styles.text}>About me</Text>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Preferences</Text>
                    </View>
                    <Text style={styles.text}>Car information</Text>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Car brand</Text>
                        <Text style = {styles.resultTitle}>{this.state.carBrand}</Text>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Car color</Text>
                        <Text style = {styles.resultTitle}>{this.state.carColor}</Text>
                    </View>
                </View>
                <View style={styles.buttonPart}>
                <TouchableOpacity style={styles.button} onPress={this.handleLogOut}>
                    <Text style={{color: "#fff", fontWeight: "500"}}>Log out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Edit")}>
                    <Text style={{color: "#fff", fontWeight: "500"}}>Edit profile</Text>
                </TouchableOpacity>
                </View>
            </ScrollView >
        );
    }
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


