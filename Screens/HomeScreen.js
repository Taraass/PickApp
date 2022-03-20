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

    container: {
        marginTop: '10%'
    },
    tinyLogo: {
        marginTop: 0,
        width: '100%',
        height: 300,
    },
    logo: {
        width: 66,
        height: 58,
    },
});