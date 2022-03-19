import React from 'react'
import {View, Text, StyleSheet, TextInput,TouchableOpacity, Image, StatusBar, LayoutAnimation} from 'react-native'
//import * as firebase from "firebase";
//import { getAuth } from "firebase/auth";

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
      /*  const {email, password} = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({errorMessage: error.message}))*/
    };

    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <StatusBar barStyle = "light-content">
                </StatusBar>
                <Image
                    source = {require("../img/logo-main.png")}
                    style={{ height:290, width: "100%"}}>
                </Image>
                <Text style = {styles.greeting}>{'Hello \n PickApp is for you! '}</Text>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style ={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style = {styles.inputTitle}>Email Address</Text>
                        <TextInput style ={styles.input} autoCapitalize = "none"
                                   onChangeText={email => this.setState({email})}
                                   value={this.state.email}
                        >
                        </TextInput>
                    </View>
                    <View style = {{marginTop: 32}}>
                        <Text style = {styles.inputTitle}>Password</Text>
                        <TextInput style = {styles.input} secureTextEntry
                                   autoCapitalize = "none"
                                   onChangeText = {password => this.setState({password})}
                                   value = {this.state.password}>
                        </TextInput>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color: "#fff", fontWeight: "500"}}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: "center", marginTop: 32}}
                                  onPress={() => this.props.navigation.navigate("Register")}>
                    <Text style = {{color: "#414959", fontSize: 13}}>
                        New to PickApp? <Text style = {{fontWeight: "500", color: "#2a9ed2"}}>Sign up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        color: "#e90022",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#31239e",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#373f9e",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
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
