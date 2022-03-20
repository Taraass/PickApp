import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default class PostScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: "#000"}}>Тут тоже ще ніц нема, Бодя во є</Text>
                <Image
                    style={styles.tinyLogo}
                    source={require('../img/bodia.jpg')}
                />
                <StatusBar style="auto" />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: '100%',
        marginTop: 150,
        height: 500,
    },
    logo: {
        width: 66,
        height: 58,
    },
});


