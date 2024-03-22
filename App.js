import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartUp from './screens/startUp';
import LogIn from './screens/login';
import SignUp from './screens/signUp';
import BottomTab from './routes/bottomTab';
import UploadImage from './screens/uploadImage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start Up" component={StartUp} options={{headerShown: false}}/>
        <Stack.Screen name="Log In" component={LogIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Bottom Tab" component={BottomTab} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
