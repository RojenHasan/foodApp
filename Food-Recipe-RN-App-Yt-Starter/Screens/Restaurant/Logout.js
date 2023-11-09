import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Logout = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You have successfully logged out</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToHome}>
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#0782F9",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default Logout;
