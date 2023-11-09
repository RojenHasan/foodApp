import React, { useState, useEffect } from 'react'; // Import useState and useEffect from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./Screens/Restaurant/WelcomeScreen";
import HomeScreen from "./Screens/Restaurant/HomeScreen";
import Subway from "./Screens/Restaurant/Subway";
import Login from "./Screens/Restaurant/Login";
//import List from "./app/screens/List";
//import Details from "./app/screens/Details";
import { onAuthStateChanged } from "firebase/auth";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logout from './Screens/Restaurant/Logout';



const Stack = createNativeStackNavigator();

function App() { 
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Subway" component={Subway} />
        <Stack.Screen name="Logout" component={Logout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
