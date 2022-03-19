import React from 'react'
import {View, Text, StyleSheet,FlatList, Image} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: "#000"}}>Ше ніц нема, дивись на Бодю</Text>
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