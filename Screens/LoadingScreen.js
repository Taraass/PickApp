import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import {auth} from "../firebase";

export default class LoadingScreen extends React.Component {
    componentDidMount() {
        auth.onAuthStateChanged(user =>{
            this.props.navigation.navigate(user ? "AppContainer" : "AuthContainer")
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading..</Text>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});