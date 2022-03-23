import React from 'react'
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import {auth} from "../firebaseAuth";

export default class ProfileScreen extends React.Component {

    state = {
        name: "",
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
        }
        return (
            <View style={styles.container}>
                <View style={styles.upPart}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={require("../img/no-img.jpg")}
                            style={styles.avatar}
                        />
                    </View>
                    <Text style={styles.name}>{this.state.name}</Text>
                </View>
                <View style={styles.about}>
                    <Text style={styles.text}>Profile</Text>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Name</Text>
                        <TouchableOpacity onPress={() => alert('Ше не робе')}>
                            <AntDesign name="edit" style={styles.edit} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Phone number</Text>
                        <TouchableOpacity onPress={() => alert('Ше не робе')}>
                            <AntDesign name="edit" style={styles.edit} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Change Password</Text>
                        <TouchableOpacity onPress={() => alert('Ше не робе')}>
                            <AntDesign name="edit" style={styles.edit} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Change Email</Text>
                        <TouchableOpacity onPress={() => alert('Ше не робе')}>
                            <AntDesign name="edit" style={styles.edit} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.text}>About me</Text>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Preferences</Text>
                        <TouchableOpacity onPress={() => alert('Ше не робе')}>
                            <AntDesign name="edit" style={styles.edit} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.text}>Car information</Text>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Car brand</Text>
                        <TouchableOpacity onPress={() => alert('Ше не робе')}>
                            <AntDesign name="edit" style={styles.edit} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rows} >
                        <Text style = {styles.inputTitle}>Car color</Text>
                        <TouchableOpacity onPress={() => alert('Ше не робе')}>
                            <AntDesign name="edit" style={styles.edit} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleLogOut}>
                    <Text style={{color: "#fff", fontWeight: "500"}}>Log out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avatarContainer: {
        marginTop: '18%',
        shadowColor: "#151734",
        shadowRadius: 20,
        shadowOpacity: 0.4
    },
    upPart:{
        backgroundColor: '#2a9ed2',
        alignItems: "center" 
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
        fontSize: 22
    },
    
    button: {
        margin: 2,
        marginHorizontal: 30,
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
    edit: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
    },
});


