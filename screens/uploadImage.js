import React, {useState,useEffect, useRef} from "react";
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Image, Button, ScrollView} from "react-native";
import axios from 'axios'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system';
import { FontAwesome6 } from '@expo/vector-icons';

export default function UploadImage({ navigation }) {
    const [imageUri, setImageUri] = useState('');
    const [labels, setLabels] = useState([])
    const [galleryPermission, setGalleryPermission] = useState(false);

    const requestPermission = async () => {
        const status = await ImagePicker.requestMediaLibraryPermissionsAsync();
        setGalleryPermission(status === 'granted')
    }

    const pickImage = async () => {
        let response = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!response.canceled) {
            setImageUri(response.assets[0].uri);
        }
    };
    
    const analyzeImage = async () => {
        try {
            if (!imageUri) {
                alert("PLease select image first")
                return;
            }

            const apiKey = "AIzaSyAu1r7IhTHA3-rDEn6YLjIdP6BVpH8pQq8"
            const apiURL = 'https://vision.googleapis.com/v1/images:annotate?key=' + apiKey
            
            const base64ImageData = await FileSystem.readAsStringAsync(imageUri, {
                encoding: FileSystem.EncodingType.Base64,
            })

            const requestData = {
                requests: [
                    {
                        image: {
                            content:base64ImageData,
                        },
                        features: [{type:'LABEL_DETECTION', maxResults: 10}],
                    },
                ],
            }
            const apiResponse = await axios.post(apiURL, requestData)
            const AIData = apiResponse.data.responses[0].labelAnnotations
            const words = []
            for (let i in AIData) {
                words.push(AIData[i].description)
            }
            navigation.navigate("Result", {words: words})

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {requestPermission()})



    return (
        <ScrollView contentContainerStyle={{alignItems: 'center',justifyContent: 'center',}}>
        {
            imageUri && 
            <Image
            source={{ uri: imageUri }}
            style={styles.image}
            />
        }   

        {
            (imageUri === '') && 
            <View style={[styles.image, {borderStyle:"dashed", borderColor:"#3279a8", borderWidth:2, alignItems:"center", justifyContent:'center'}]}>
                <Text style={{color:"#3279a8", fontSize:40}}>+</Text>
            </View>
        }   

            <TouchableOpacity style = {[styles.button, {marginTop:50}]} onPress={pickImage}> 
                <Text>Select Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.button, {marginTop:20, backgroundColor:"#42f563", borderColor:"#42f563"}]} onPress={analyzeImage}> 
                <FontAwesome6 name="magnifying-glass" size={30} color="white" />
            </TouchableOpacity>

            <View style={{height:100}}></View>
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
        marginTop: 100
    },

    textInputStyle: {
        borderBottomWidth: 1,
        width: "80%",
        height: 45,
        paddingLeft:10
    },
    outtext: {
        marginTop: 20,
        fontSize: 20,
    },
    image: {
        height: 400,
        width:300,
        marginTop: 50,
        borderRadius:20,
    }
});