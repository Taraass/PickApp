import React from 'react'
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {auth} from "../firebase";

export default class ProfileScreen extends React.Component {

    state = {
        name: "",
    };

    handleError = () => {
        alert('Ви шо, на приколі, один з другим...')
    }

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
                <View style={{ marginTop: 64, alignItems: "center" }}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={require("../img/bodia.jpg")}
                            style={styles.avatar}
                        />
                    </View>
                    <Text style={styles.name}>{this.state.name}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleError}>
                    <Text style={{color: "#fff", fontWeight: "500"}}>Ту кнопку ше не рухати</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.handleLogOut}>
                    <Text style={{color: "#fff", fontWeight: "500"}}>Log out</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        marginTop: 64,
        alignItems: "center"
    },
    avatarContainer: {
        shadowColor: "#151734",
        shadowRadius: 30,
        shadowOpacity: 0.4
    },
    avatar: {
        width: 136,
        height: 136,
        borderRadius: 68
    },
    name: {
        margin:24,
        fontSize: 22
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 32
    },
    stat: {
        alignItems: "center",
        flex: 1
    },
    statAmount: {
        color: "#4F566D",
        fontSize: 18,
        fontWeight: "300"
    },
    statTitle: {
        color: "#C3C5CD",
        fontSize: 12,
        fontWeight: "500",
        marginTop: 4
    },
    button: {
        margin: 2,
        marginHorizontal: 30,
        backgroundColor: "#2a9ed2",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});


