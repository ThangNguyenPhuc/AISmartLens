import React, {useState} from "react";
import { View, Text, ScrollView , TouchableOpacity,StyleSheet, TextInput} from 'react-native'
import { auth } from "../firebase";
import { signOut, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { AntDesign } from '@expo/vector-icons';


export default function Settings({navigation}) {
    const user = auth.currentUser;
    const [userEmail, setUserEmail] = useState(user.email)
    const [currPass, setCurPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [inpVisible, setInpVisible] = useState(false)

    
    const toggle = () => {
        setInpVisible(!inpVisible)
    }

    const reauth = (currentPass) => {
        let cred = EmailAuthProvider.credential(user.email, currentPass)
        return reauthenticateWithCredential(user, cred)
    }

    const handleChangePass = () => {
        reauth(currPass).then(() => {
            updatePassword(user, newPass).then(() => {
                console.log("Password updated!")
                toggle()
            })
        })
    }


    const handleLogOut = () => {
        signOut(auth).then(() => navigation.navigate("Start Up"))
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Text style={{fontSize:25, fontWeight:"600"}}>Account</Text>
                <Text style={{fontWeight:"600", marginTop:20}}>Email: {userEmail}</Text>

                <TouchableOpacity style = {[styles.card, {marginTop:60,alignItems:"center", alignSelf:"center", height:60,backgroundColor:"#7dbdf0", borderColor:"#7dbdf0"}]} onPress={toggle}> 
                        <Text style={{color:"white"}}>Change Password</Text>
                </TouchableOpacity>
                {
                    inpVisible &&
                    (
                        <View style={{alignSelf:"center", alignItems:"center", justifyContent:"center", marginTop:30, width:"95%"}}>
                            <TextInput
                            placeholder="Current password"
                            style={[styles.textInputStyle, {}]}
                            value={currPass}
                            onChangeText={setCurPass}
                            secureTextEntry = {true}
                            />
                            <TextInput
                            placeholder="New password"
                            style={[styles.textInputStyle, {marginTop: 20, marginBottom:30}]}
                            value={newPass}
                            onChangeText={setNewPass}
                            secureTextEntry = {true}
                            />

                            <TouchableOpacity onPress={handleChangePass}>
                                <Text style={{color:"#007ff9"}}>Change Password</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }

                <TouchableOpacity style = {[styles.card, {marginTop:30, alignItems:"center", alignSelf:"center", height:60,backgroundColor:"#f01a1a", borderColor:"#f01a1a"}]} onPress={handleLogOut}> 
                        <Text style={{color:"white"}}>Log Out</Text>
                </TouchableOpacity>
            </View>

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
        justifyContent: "center",
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        width: "95%",
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
        paddingLeft: 10,
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