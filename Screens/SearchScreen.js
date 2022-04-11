import React, {useEffect, useState } from 'react'
import {View, StyleSheet, Text, Image,ScrollView} from 'react-native'
import { db } from '../firebaseStorage'
import { collection, query, where, getDocs } from "firebase/firestore";

const SearchScreen = ({route}) => {

    const { depart } = route.params;
    const { arr } = route.params;
    const { month } = route.params;
    const { day } = route.params;
    const [data, setData] = useState([]);
    let w = []; 

        const getData = async() => {
            try {
                const q = query(collection(db, "Trip"),
                where("departune", "==", depart.toString()),
                where("arrive", "==", arr.toString()),
                where("month", "==", month.toString()),
                where("day", "==", day.toString()));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    const k = {
                        ...doc.data()
                    }
                    w.push(k);
                });
                if(w.length === 0 ) {
                    alert('There are no such trips:( Please, try to find another!');
                }
                console.log(w);
            } catch (e) {
                alert("Error adding document ",e);
            }
        }

        useEffect(async() => {
            getData().then(() => {
                setData(w);
            })
        },[]);
    
        return (
        <ScrollView>
            <View style={styles.container}>
                {data.map((k)=>{
                    return (
                    <View style={styles.modal}>
                        <View style={styles.upPart}>
                            <View style={styles.row}>
                                <Text style={styles.tripInfo}>16:40</Text>
                                <Text style={styles.tripResult}>{k.departune}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.tripInfo}>16:40</Text>
                                <Text style={styles.tripResult}>{k.arrive}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                        <View style={styles.avatarContainer}>
                            <Image source={require('../img/no-img.jpg')} style={styles.avatar} />
                        </View>
                            <Text style={styles.name}>{k.driver}</Text>
                            <Text style={styles.tripInfoPrice}>{k.price}</Text>
                        </View>
                    </View>
                    )}
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    fuck:{
      backgroundColor: 'blue',
        width: '100%',
        height: '100%'
    },
    fuck1:{
        backgroundColor: 'yellow',
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 30,

    },
    modal: {
        borderWidth: 0.6,
        width: '90%',
        height: 190,
        marginTop: 30,
        paddingTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        flexDirection: "column",
        flexWrap: "wrap",
    },
    tripResult: {
        color: '#334700',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 25
    },
    row: {
        flexDirection: 'row',
    },
    tripInfo: {
        color: '#2a9ed2',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 25
    },
    tripInfoPrice: {
        color: '#2a9ed2',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 21,
        marginLeft: '30%',
        marginRight: 30,
    },
    upPart: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F8FF'
    },
    avatarContainer: {
        marginLeft: 30,
        marginTop: 10,
        shadowColor: "#151734",
        shadowRadius: 20,
        shadowOpacity: 0.4
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 68
    },
    name: {
        color: '#2a9ed2',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30,
    },
});

export default SearchScreen;