import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black", // only works on iOS
    shadowOffset: { // only works on iOS
      width: 0,
      height: 2
    },
    shadowOpacity: 0.26, // only works on iOS
    shadowRadius: 6, // only works on iOS
    backgroundColor: "white",
    elevation: 5, // only works on Android
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  }
});

export default StartGameScreen;
