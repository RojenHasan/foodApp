import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { signOut } from 'firebase/auth'; // Import the signOut function from Firebase Authentication
import colors from "../../config/Restaurant/colors";
import SPACING from "../../config/SPACING";
import { getAuth } from 'firebase/auth'; // Import the getAuth function to get the auth object

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const userEmail = route.params?.userEmail;

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  const navigateToLogin = () => {
    if (userEmail) {
      clearUserData();
    } else {
      navigation.navigate("Login");
    }
  };

  const clearUserData = () => {
    const auth = getAuth(); // Get the auth object
    signOut(auth) // Sign out the user using the auth object
      .then(() => {
        // Successfully signed out
        // You can also clear user data from other sources like AsyncStorage here
        navigation.navigate("Logout"); // Navigate to the Logout screen or any other appropriate screen
      })
      .catch((error) => {
        // Handle sign-out error
        console.error(error);
      });
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/pexels-william-choquette-2641886.jpeg")}
    >
      <View style={{ flex: 1, backgroundColor: colors.black, opacity: 0.2 }} />
      <View
        style={{
          position: "absolute",
          height: "100%",
          zIndex: 2,
          width: "100%",
          justifyContent: "flex-end",
          paddingHorizontal: SPACING * 2,
          paddingBottom: SPACING * 5,
        }}
      >
        <View>
          <Text
            style={{
              color: colors.white,
              fontWeight: "800",
              fontSize: SPACING * 4.5,
              textTransform: "capitalize",
            }}
          >
            Central Perk Eats
          </Text>
          <Text
            style={{
              color: colors.white,
              fontWeight: "600",
              fontSize: SPACING * 1.7,
            }}
          >
            Good food, Good mood!
          </Text>
          {userEmail && (
            <Text
              style={{
                color: colors.white,
                fontSize: SPACING * 2,
                marginTop: SPACING * 2,
              }}
            >
              Welcome, {userEmail}!
            </Text>
          )}
          <TouchableOpacity
            style={{
              padding: SPACING * 2,
              backgroundColor: colors.white,
              borderRadius: SPACING * 2,
              alignItems: "center",
              marginTop: SPACING * 3,
            }}
            onPress={navigateToHome}
          >
            <Text
              style={{
                color: colors.black,
                fontSize: SPACING * 2,
                fontWeight: "700",
              }}
            >
              Explore Now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: SPACING * 2,
              backgroundColor: colors.white,
              borderRadius: SPACING * 2,
              alignItems: "center",
              marginTop: SPACING * 3,
            }}
            onPress={navigateToLogin}
          >
            <Text
              style={{
                color: colors.black,
                fontSize: SPACING * 2,
                fontWeight: "700",
              }}
            >
              {userEmail ? "Log Out" : "Login"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
