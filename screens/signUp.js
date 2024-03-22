import React, {useState} from "react";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from "react-native";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user
            navigation.navigate("Bottom Tab")
        })
    }

    return (
        <KeyboardAvoidingView style={{flex:1}} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput
                        placeholder="Enter your email"
                        style={[styles.textInputStyle, { marginTop: 70 }]}
                        value={email}
                        onChangeText = {setEmail}
                    />

                    <TextInput
                        placeholder="Enter your password"
                        style={[styles.textInputStyle, { marginTop: 50 }]}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry = {true}
                    />

                    <TouchableOpacity style = {[styles.button, {marginTop:70}]} onPress={handleSignUp}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        backgroundColor:"white"
    },
    button: {
        alignItems: "center",
        justifyContent:"center",
        padding: 10,
        borderWidth: 1,
        borderRadius:20,
        width: "50%",
        height: 75
    },

    title:{
        fontSize: 25,
        fontWeight: "500",
        marginTop: 125
    },

    textInputStyle: {
        borderBottomWidth: 1,
        width: "80%",
        height: 45,
        paddingLeft:10
    },
});