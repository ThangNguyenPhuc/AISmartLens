import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Dialog from 'react-native-dialog'
import { dataset } from "../components/translate";
import { remove, ref } from "firebase/database";
import { db } from "../firebase";
import { auth } from "../firebase";
import { SimpleLineIcons } from '@expo/vector-icons';
import * as Speech from 'expo-speech'

export default function Review({ route, navigation }) {
    const userid = auth.currentUser.uid
    const [enText, setEnText] = useState(route.params.text)
    const [translation, setTranslation] = useState(dataset[enText])
    const [visible, setVisible] = useState(false)


    const toggleDialog = () => {
        setVisible(!visible)
    }

    const handleRemove = (word) => {
        remove(ref(db, userid + '/wordList/' + word))
        toggleDialog()
        navigation.goBack()
    }

    const handleSpeak = () => { 
        Speech.speak(enText, {
            voice: "com.apple.speech.voice.Alex"
        })
    }
 
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.card} onLongPress={toggleDialog}> 
                <Text style={{ fontSize: 25 }}>{enText}</Text>         
                <TouchableOpacity style={styles.icon} onPress={handleSpeak}>
                    <SimpleLineIcons name="volume-2" size={24} color="black" />
                </TouchableOpacity>
            </TouchableOpacity>

            <View style={styles.card}>
                <Text style={{fontSize:25}}>{translation}</Text>
            </View>

            <Dialog.Container visible={visible}>
                <Dialog.Title>Remove word</Dialog.Title>
                <Dialog.Description>
                    Do you want to remove this word from bookmark? This action can't be undo.
                </Dialog.Description>
                <Dialog.Button label="Remove" color = "red" onPress={() => {handleRemove(enText)}} />
                <Dialog.Button label="Cancel" onPress={toggleDialog}/>
            </Dialog.Container>
        </ScrollView>
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
        marginTop: 25
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