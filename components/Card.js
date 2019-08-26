import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
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
  }
});

export default Card;