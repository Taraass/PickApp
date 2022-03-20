import React from 'react'
import {View, Modal,Text, StyleSheet, Image} from 'react-native'

export default class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../img/photo.png')}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    container: {
        flex: 1,
    },
    tinyLogo: {
        marginTop: 40,
        width: '100%',
        height: 300,
    },
    logo: {
        width: 66,
        height: 58,
    },
});