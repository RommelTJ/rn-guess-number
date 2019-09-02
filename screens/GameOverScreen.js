import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/success.png')}
          // fadeDuration={1000}
          // source={{uri: 'http://www.alanarnette.com/images/mteverest/looking-back-at-the-south-summit-of-everest.jpg'}}
          resizeMode="cover"
        />
      </View>
      <BodyText>
        Your phone needed <Text>{props.roundsNumber}</Text> rounds to guess the number <Text>{props.userNumber}</Text>.
      </BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 300
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    width: 300,
    height: 300,
    overflow: 'hidden',
    marginVertical: 30
  }
});

export default GameOverScreen;
