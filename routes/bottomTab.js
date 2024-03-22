import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home'
import WordList from '../screens/wordList'
import Library from '../screens/library'
import Settings from '../screens/settings'
import UploadImage from '../screens/uploadImage';
import Dictionary from '../screens/dictionary';
import Result from '../screens/result';
import Review from '../screens/review';
import TakePicture from '../screens/takePicture';
import Content from '../screens/content';
const DictionaryStack = createNativeStackNavigator()
const WordListStack = createNativeStackNavigator()
const LibraryStack = createNativeStackNavigator()

const offHeader = {headerShown:false}

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

function DictionaryStackScreen() {
    return (
        <DictionaryStack.Navigator>
            <DictionaryStack.Screen name="Dictionary Main" component={Dictionary} options={offHeader} />
            <DictionaryStack.Screen name="Take Picture" component={TakePicture} options={offHeader} />
            <DictionaryStack.Screen name="Upload Image" component={UploadImage} options={offHeader} />
            <DictionaryStack.Screen name="Result" component={Result} options={offHeader} />
            
        </DictionaryStack.Navigator>
    );
}



function WordListStackScreen() {
    return (
        <WordListStack.Navigator>
            <WordListStack.Screen name="WList" component={WordList} options={offHeader} />
            <WordListStack.Screen name = "Review" component={Review} options={offHeader}/>
        </WordListStack.Navigator>
    );
}

function LibraryStackScreen() {
    return (
        <LibraryStack.Navigator>
            <LibraryStack.Screen name="library-main" component={Library} options={offHeader} />
            <LibraryStack.Screen name="library-first-content" component={Content} options={offHeader} />
        </LibraryStack.Navigator>
    );
}

const Tab = createBottomTabNavigator()

export default function BottomTab() {
    
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, sizse }) => {
                    let iconName, iconColor
                    let rn = route.name

                    if (rn == "Home") {
                        iconName = focused ? "home" : "home-outline" 
                        iconColor = focused ? "#007ff9" : "black"
                        return <Ionicons name={iconName} size={24} color={iconColor} />
                    }

                    if (rn == "Dictionary") {
                        iconName = focused ? "search" : "search-outline" 
                        iconColor = focused ? "#007ff9" : "black"
                        return <Ionicons name={iconName} size={24} color={iconColor} />
                    }
                    if (rn == "Word List") {
                        iconName = focused ? "notebook" : "notebook-outline"
                        iconColor = focused ? "#007ff9" : "black"
                        return <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
                    }
                    if (rn == "Library") {
                        iconName = focused ? "library" : "library-outline" 
                        iconColor = focused ? "#007ff9" : "black"
                        return <Ionicons name={iconName} size={24} color={iconColor} />
                    }
                    if (rn == "Settings") {
                        iconName = focused ? "settings" : "settings-outline" 
                        iconColor = focused ? "#007ff9" : "black"
                        return <Ionicons name={iconName} size={24} color={iconColor} />
                    }

                    
                }
            })}
        >
            <Tab.Screen name = "Home" component={Home}/>
            <Tab.Screen name = "Dictionary" component={DictionaryStackScreen}/>
            <Tab.Screen name = "Word List" component={WordListStackScreen}/>
            <Tab.Screen name = "Library" component={LibraryStackScreen}/>
            <Tab.Screen name = "Settings" component={Settings}/>
        </Tab.Navigator>
    );
}