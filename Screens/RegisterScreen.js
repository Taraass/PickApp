import React from 'react'
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from '../firebase'

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        errorMessage: null
    };

    handleSignUp = () => {
        const {email, password } = this.state;
        if (this.state.password === this.state.confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password).
                then(() => {
                    alert("Congratulations! You have been successfully registered!")
                    updateProfile(auth.currentUser, {
                        displayName: this.state.name
                    }).then(r =>
                    this.props.navigation.navigate('Loading')
            )})
                .catch((error) => {
                   this.setState({errorMessage: error.message})
                })
        } else {
            alert('Passwords do not match.');
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source = {require("../img/logo-main.png")}
                    style={{ height:285, width: "100%"}}>
                </Image>
                <Text style = {styles.greeting}>{'Welcome!  \n Please,sign up:) '}</Text>
                <View style={styles.form}>
                    <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style ={styles.error}>{this.state.errorMessage}</Text>}
                    </View>
                    <View>
                        <Text style = {styles.inputTitle}>Full name</Text>
                        <TextInput
                            style ={styles.input} autoCapitalize = "none"
                            onChangeText={name => this.setState({name})}
                            value={this.state.name}
                        >
                        </TextInput>
                    </View>

                    <View style = {{marginTop: 32}}>
                        <Text style = {styles.inputTitle}>Email Address </Text>
                        <TextInput style ={styles.input}
                                   autoCapitalize = "none"
                                   onChangeText={email => this.setState({email})}
                                   value={this.state.email}>

                        </TextInput>
                    </View>

                    <View style = {{marginTop: 32}}>
                        <Text style = {styles.inputTitle}>Password</Text>
                        <TextInput style ={styles.input} secureTextEntry
                                   autoCapitalize = "none"
                                   onChangeText={password => this.setState({password})}
                                   value={this.state.password}>
                        </TextInput>
                    </View>
                    <View style = {{marginTop: 32}}>
                        <Text style = {styles.inputTitle}>Confirm Password </Text>
                        <TextInput style ={styles.input} secureTextEntry
                                   autoCapitalize = "none"
                                   onChangeText={confirmPassword => this.setState({confirmPassword})}
                                   value={this.state.confirmPassword}>
                        </TextInput>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color: "#fff", fontWeight: "500"}}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: "center", marginTop: 32}}
                                  onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style = {{color: "#414959", fontSize: 13}}>
                        Already in PickApp? <Text style = {{fontWeight: "500", color: "#152fe9"}}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: -62,
        marginLeft: 204,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 38,
        marginHorizontal: 30
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
    button: {
        marginHorizontal: 30,
        backgroundColor: "#2a9ed2",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});
