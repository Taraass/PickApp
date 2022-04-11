import React, {useState} from 'react'
import {View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from 'react-native'
import DatePicker from 'react-native-datepicker'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { collection, addDoc} from "firebase/firestore";
import {auth} from '../firebaseAuth';
import {db} from '../firebaseStorage'

export default function PostScreen () {

    const [departune, setDepartune] = useState("")
    const [arrival, setArrival] = useState("")
    const [price, setPrice] = useState("")
    const [date, setDate] = useState(new Date())
    console.log(date);
    console.log('Test', new Date(date).getMonth());
    console.log('Test', new Date(date).getDate());


    const storeData = async() => {
        try {
            const user = auth.currentUser;
            if(arrival !== "" && departune !== "" && price !== "") {
            await addDoc(collection(db, "Trip"), {
              arrive: arrival,
              departune: departune,
              driver: user.displayName,
              userId: user.uid,
              price: price,
              //month: month,
              //day: day
            });
            alert("Trip was added!");
            } else {
                alert("Info can not be empty!");
            }
        } catch (e) {
            alert("Error adding document: ", e);
        }
    }

    
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.mainpicture}
                source={require('../img/logoTestfree.jpg')}
            >
                <View style={styles.modal}>
            <AntDesign name="caretdown" size={18} color="black" />
                <TextInput style ={styles.input} autoCapitalize = "none"
                    onChangeText={departune => setDepartune(departune)}
                    value={departune}
                    placeholder='Route from ...'/>
            <AntDesign name="caretdown" size={18} color="black" />
            </View>
            <View style={styles.modal}>
            <AntDesign name="caretup" size={18} color="black" />
                <TextInput style ={styles.input} autoCapitalize = "none"
                    onChangeText={arrival => setArrival(arrival)}
                    value={arrival}
                    placeholder='Route to ...'/>
            <AntDesign name="caretup" size={18} color="black" />
            </View>
            <View style={styles.modal2}>
                <Text style = {styles.textQuestion}>{'When are you going to ride?'}</Text>
                <DatePicker
                        style={styles.datePickerStyle}
                        date={date} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        maxDate="31-12-2022"
                        minDate={new Date()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                //display: 'none',
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                marginLeft: 36,
                            },
                        }}
                        onDateChange={(date) => {
                            setDate(date);
                        }}
                    />
                <View style={styles.place}>
                    <FontAwesome name="money" style={styles.iconPerson} size={24} color="black" />
                    <TextInput style = {styles.number}
                        onChangeText={price => setPrice(price)}
                        value={price}
                        placeholder='Price'/>
                </View>
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => storeData()}>
                <Text style={{color: "#fff", fontWeight: "500"}}>Create a trip</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    datePickerStyle: {
        width: 150,
        marginTop: 20,
        marginLeft: 20
    },
    mainpicture: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: "center",
        marginTop: 0,
        width: '100%',
        height: '100%',
    },
    modal: {
        width: '80%',
        height: 75,
        marginTop: 10,
        paddingTop: 10,
        padding:'2%',
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: "wrap"
    },
    modal2: {
        width: '80%',
        height: 110,
        marginTop: 20,
        paddingTop: 10,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: "wrap"
    },
    input: {
        borderBottomColor: "#373f9e",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 50,
        marginLeft: 10,
        width: '80%',
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        width: '80%',
        backgroundColor: "#2a9ed2",
        margin: 20,
        borderRadius: 20,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    textQuestion: {
        marginLeft: 27,
        marginTop: 11,
        fontSize: 17
    },
    textToday: {
        color: 'grey',
        marginTop: 6,
        fontSize: 18,
    },
    iconDate:{
        color: 'grey',
        marginLeft: '20%',
        marginRight: 15
    },
    iconPerson: {
        color: 'grey',
        marginLeft: '14%',
        marginRight: 15
    },
    place: {
        marginTop: 40,
        flexDirection: "row",
    },
    number: {
        color: 'grey',
        fontSize: 18,
    }
});
