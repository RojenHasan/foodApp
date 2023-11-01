import {
  Image,ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SPACING from "../../config/SPACING";
import colors from "../../config/Restaurant/colors";
import DATA from "../../config/Restaurant/DATA";
import restaurantNames from "../../config/Restaurant/restaurantNames";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const ITEM_WIDTH = width / 2 - SPACING * 3;

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const navigation = useNavigation();

  const backgroundImage = require("../../assets/wp2001499.jpg"); // Replace with the path to your background image

  return (
    
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
      <View style={styles.topContent}>
          
          <Text style={styles.restaurantName}>CentralPerk</Text>
        </View>
        <Text style={styles.heading}>Select a Restaurant:</Text>
        {restaurantNames.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            style={styles.restaurantButton}
            onPress={() => {
              // Navigate to the specific restaurant screen
              navigation.navigate(restaurant.title); // Use the restaurant title as the screen name
            }}
          >
            <Text style={styles.restaurantButtonText}>{restaurant.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topContent: {
    alignItems: "center",
    marginTop: SPACING * 8,
  },
  restaurantName: {
    fontSize: SPACING * 5,
    fontWeight: "700",
    color: colors.white,
    marginBottom: SPACING * 2,
  },
  heading: {
    fontSize: SPACING * 2,
    color: colors.white,
    marginBottom: SPACING,
  },
  restaurantButton: {
    padding: SPACING * 2,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: SPACING * 2,
    margin: SPACING,
  },
  restaurantButtonText: {
    fontSize: SPACING * 1.5,
    color: colors.white,
    textAlign: "center",
  },
});

export default HomeScreen;