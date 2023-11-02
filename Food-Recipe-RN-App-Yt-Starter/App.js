import React, { useState, useEffect } from 'react'; // Import useState and useEffect from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./Screens/Restaurant/WelcomeScreen";
import HomeScreen from "./Screens/Restaurant/HomeScreen";
import Subway from "./Screens/Restaurant/Subway";
import LoginScreen from "./Screens/Restaurant/Login";
import Login from "./app/screens/Login";
//import List from "./app/screens/List";
//import Details from "./app/screens/Details";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";

const Stack = createStackNavigator();
const InsideStack = createStackNavigator();

/*function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="My todos" component={List} />
      <InsideStack.Screen name="details" component={Details} />
    </InsideStack.Navigator>
  );
}*/
function App() { 
   const [user, setUser] = useState<User | null>(null); 


  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Subway" component={Subway} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
