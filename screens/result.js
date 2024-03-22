import React, {useEffect, useState} from "react";
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";
import Dialog from 'react-native-dialog'
import { dataset } from "../components/translate";
import { ref, set } from 'firebase/database'
import { db } from "../firebase";
import { auth } from "../firebase";
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Speech from 'expo-speech'

export default function Result({ route, navigation }) {
    const [words, setWords] = useState(null)


    const [enText, setEnText] = useState(route.params.result)
    
    const [visible, setVisible] = useState(false)
    const userid = auth.currentUser.uid;
    
    const rebuildWords = () => {
        let wl = [], tmp = route.params.words;
        for (let i = 0; i < tmp.length; i++) {
            wl.push([Math.floor(Math.random()*100000), tmp[i], dataset[tmp[i].toLowerCase()] == undefined ? "No translations available" : dataset[tmp[i].toLowerCase()],])
        }
        setWords(wl)
    }

    const toggleDialog = () => {
        setVisible(!visible)
    }

    const handleAdd = (word) => {
        set(ref(db, userid+'/wordList/'+word), {
            name: word
        }).then(() => {alert(word+" was added to your word list!")})
    }

    
    const handleSpeak = (word) => { 
        Speech.speak(word, {
            voice: "com.apple.speech.voice.Alex"
        })
    }

    useEffect(() => {
        rebuildWords()
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
                <TouchableOpacity style={{ marginLeft: 20, marginRight: 20 }} onPress={() => { handleAdd(word) }}>
                    <MaterialCommunityIcons name="bookmark-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
 
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={words}
                renderItem={({item}) => <Item word={item[1]} meaning={item[2]} />}
                style = {{width:"100%"}}
            />

            
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
    card: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        width: "80%",
        height:"30%",
        marginTop:50,
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
        position: "absolute",
        bottom: 20,
        right:20
    },
    subtext: {
        marginTop: 25,
        fontSize: 20,
        fontWeight: "600"
    },
    item:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,

    }
});