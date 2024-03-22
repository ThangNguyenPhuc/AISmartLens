import React from "react";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image} from "react-native";



export default function StartUp({navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require("../resource/Images/logo.png")}
                style= {[styles.logo, {marginTop: 100}]}
            />
            
            <TouchableOpacity style = {[styles.button, {marginTop:150}]} onPress={() => navigation.navigate("Log In")}>
                <Text>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.button, {marginTop:45}]} onPress={() => navigation.navigate("Sign Up")}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </SafeAreaView>
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
        width: "75%",
        height: 75
    },
    logo: {
        height: 200,
        width: 200,
        marginTop: 50
    }
});