import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Image, ScrollView} from "react-native";


export default function Dictionary({navigation}){
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Take Picture")}>
                <Image
                    source={require("../resource/Images/camera.png")}
                    style= {[styles.icon, {marginTop: 10, marginRight: 20}]}
                />
                <View style={{paddingRight:80}}> 
                    <Text style = {{fontSize:20, fontWeight:"600"}}>Take Picture</Text>
                    <Text style={{marginTop:10, color:'gray'}}>Take a picture of your object</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Upload Image")}>
                <Image
                    source={require("../resource/Images/image-upload.png")}
                    style= {[styles.icon, {marginTop: 10, marginRight: 20}]}
                />
                <View style={{paddingRight:80}}> 
                    <Text style = {{fontSize:20, fontWeight:"600"}}>Upload Image</Text>
                    <Text style={{marginTop:10, color:'gray'}}>Upload images from your device to translate</Text>
                </View>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.card}>
                <Image
                    source={require("../resource/Images/translate.png")}
                    style= {[styles.icon, {marginTop: 10, marginRight: 20}]}
                />
                <View style={{paddingRight:80}}> 
                    <Text style = {{fontSize:20, fontWeight:"600"}}>Dictionary</Text>
                    <Text style={{marginTop:10, color:'gray'}}>Use it like a normal dictionary</Text>
                </View>
            </TouchableOpacity> */}
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
        flexDirection:"row",
        alignItems: "center",
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        width: "90%",
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