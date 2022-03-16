import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    state = {
        user: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            avatar: null
        },
        errorMessage: null
    };



    handleSignUp = () => {
        /*const {password, confirmPassword } = this.state;
        if (this.state.password === this.state.confirmPassword) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(useCredentials => {
                    return useCredentials.user.updateProfile({
                        displayName: this.state.name
                    });
                })
        } else {
            alert('Passwords do not match.');
        }*/
    };

    /*  handlePickAvatar = async () => {
          UserPermissions.getCameraPermission();

          let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3]
          });

          if (!result.cancelled) {
              this.setState({ user: { ...this.state.user, avatar: result.uri } });
          }
      };*/

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source = {require("../img/logo-main.png")}
                    style={{ height:285, width: "100%"}}>
                </Image>
                <Text style = {styles.greeting}>{'Welcome! \n Please, sign up:) '}</Text>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style ={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>

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
