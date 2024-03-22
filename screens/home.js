import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Image, ScrollView} from "react-native";


export default function Home({navigation}){
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require("../resource/Images/logo.png")}
                style= {[styles.logo, {marginTop: 10}]}
            />
            <Text style={styles.title}>Welcome back!</Text>

            <View style={styles.row}>
                <TouchableOpacity style ={[styles.button, {marginRight: 40}]} onPress={()=>navigation.navigate("Dictionary")}>
                    <Image
                        source={require("../resource/Images/glass.png")}
                        style= {[styles.icon, {marginTop: 10}]}
                    />
                    <Text style={styles.subtext}>Dictionary</Text>
                </TouchableOpacity>

                <TouchableOpacity style ={[styles.button]} onPress={()=>navigation.navigate("Word List")}>
                    <Image
                        source={require("../resource/Images/notebook.png")}
                        style= {[styles.icon, {marginTop: 10}]}
                    />
                    <Text style={styles.subtext}>Word List</Text>
                </TouchableOpacity>

            </View>

            <View style={[styles.row, {marginTop:50}]}>
                <TouchableOpacity style ={[styles.button, {marginRight: 40}]} onPress={()=>navigation.navigate("Library")}>
                    <Image
                        source={require("../resource/Images/bookshelf.png")}
                        style= {[styles.icon, {marginTop: 10}]}
                    />
                    <Text style={styles.subtext}>Library</Text>

                </TouchableOpacity>

                <TouchableOpacity style ={[styles.button]} onPress={()=>navigation.navigate("Settings")}>
                    <Image
                        source={require("../resource/Images/setting.png")}
                        style= {[styles.icon, {marginTop: 10}]}
                    />
                    <Text style={styles.subtext}>Settings</Text>

                </TouchableOpacity>

            </View>

            <View style={{height:200}}></View>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor:"white"
    },
    row: {
        flexDirection: "row",
        marginTop:100
    },
    button: {
        alignItems: "center",
        justifyContent:"center",
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        width: "40%",
        shadowOffset: { width: 0, height:5 },
        shadowOpacity: 0.3,
        elevation:5
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
        height: 125, 
        width: 125,
    },
    subtext: {
        marginTop: 25,
        fontSize: 20,
        fontWeight: "600"
    }
});