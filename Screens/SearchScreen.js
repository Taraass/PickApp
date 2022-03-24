import React from 'react'

import {View, Text, StyleSheet, Image} from 'react-native'
import {db} from '../firebaseStorage'
import { collection, query, where, getDocs } from "firebase/firestore";

export default class SearchScreen extends React.Component {

    state = {
        docId: "",
        arrival: "",
        depart: "",
        driver: ""
    }

    test = (myMap) => {
        for(let i = 0; i < myMap.size(); i++){
            console.log('Mappp');
        }
        /*return(
            <FlatList
                data={myMap}
                renderItem={({ item }) => <Text style={styles.item}>{item.arrival}</Text>}
                keyExtractor={(item) => item.id}
            />
        )*/
    }

    componentDidMount() {
        this.Search()
    }

    Search = async() => {
       try {
            let myMap = new Map();
            console.log('New one __________2_')
            const q = query(collection(db, "Trip"), where("arrive", "==", "Kyiv"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                myMap.set(doc.id, doc.data())

                // doc.data() is never undefined for query doc snapshots
                //this.setState({depart: doc.data().departune})
                //this.setState({arrival: doc.data().arrive})
                //this.setState({driver: doc.data().driver})
            });
            console.log("Map:", myMap.get('cnh3oC8qhfpp1nREGZ8j'))

       } catch (e) {
            alert("Error adding document: ", e.message);
       }
   }
    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.modal}>
                    <View style={styles.upPart}>
                        <View style={styles.row}>
                            <Text style={styles.tripInfo}>16:40</Text>
                            <Text style={styles.tripResult}>{this.state.arrival}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.tripInfo}>16:40</Text>
                            <Text style={styles.tripResult}>{this.state.depart}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={require("../img/no-img.jpg")}
                                style={styles.avatar}
                            />
                        </View>
                        <Text style={styles.name}>{this.state.driver}</Text>
                        <Text style={styles.tripInfoPrice}>300</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 30

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
