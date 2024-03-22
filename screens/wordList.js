import React, {useEffect, useState} from "react";
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Image, ScrollView, FlatList} from "react-native";
import { onValue, ref, remove } from "firebase/database";
import { db } from "../firebase";
import { auth } from "../firebase";
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons'; 
import * as Speech from 'expo-speech'
import { dataset } from "../components/translate";

export default function Dictionary({ navigation }) {
    const userid = auth.currentUser.uid;
    const [wordList, setWordList] = useState([])

    const handleSpeak = (word) => { 
        Speech.speak(word, {
            voice: "com.apple.speech.voice.Alex"
        })
    }

    const retrieveData = () => {
        onValue(ref(db, userid + '/wordList/'), (snapshot) => {
            let wl = []
            if (snapshot.val() != null) {
                console.log(snapshot.val())
                const data = snapshot.val()
                let datakey = Object.keys(data)
                for (let k = 0; k < datakey.length; k++) {
                    wl.push([Math.floor(Math.random() * 1000), datakey[k], dataset[datakey[k].toLowerCase()] == undefined ? "No translations available" : dataset[datakey[k].toLowerCase()]])
                }   
            }
            
            setWordList(wl)
        })
    }


    const handleRemove = (word) => {
        console.log('start')
        remove(ref(db, userid + '/wordList/' + word)).then(() => {
            retrieveData()
            console.log('finish')
        })
    }


    useEffect(() => {
        retrieveData();
    }, [])


    const Item = ({word, meaning}) => (
        <View style={styles.item} >
            <View style={{marginLeft:20, marginTop:30, marginBottom:30}}>
                <Text style={styles.title}>{word}</Text>
                <Text style={{marginTop:10}}>{ meaning}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={() => {handleSpeak(word)}}>
                    <SimpleLineIcons name="volume-2" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 20, marginRight: 20 }} onPress={() => { handleRemove(word) }}>
                    <Ionicons name="trash-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
    
    return (
        <SafeAreaView style={styles.container}>
            {
                (wordList.length>0) &&
                (<FlatList
                    data={wordList}
                    renderItem={({ item }) => <Item word={item[1]} meaning={item[2]} />}
                    style = {{width:"100%"}}
                />)
            }
            {
                (wordList == []) &&
                (
                    <Text style={{marginTop:30}}>Your word list is empty!</Text>
                )
            }
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        backgroundColor:"white"
    },
    row: {
        flexDirection: "row",
        marginTop:100
    },
    item:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,

    },

    title:{
        fontSize: 25,
        fontWeight: "500",
    },


    textInputStyle: {
        borderBottomWidth: 1,
        width: "80%",
        height: 45,
        paddingLeft:10
    },
    logo: {
        height: 100,
        width: 100,
        marginTop: 50
    },

    icon: {
        height: 80, 
        width: 80,
    },
    subtext: {
        marginTop: 25,
        fontSize: 20,
        fontWeight: "600"
    }
});