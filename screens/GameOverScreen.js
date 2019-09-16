import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from '../constants/colors';
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
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
          <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>
              Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number
              <Text style={styles.highlight}> {props.userNumber}</Text>.
            </BodyText>
          </View>
          <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  image: {
    width: '100%',
    height: 300
  },
  imageContainer: {
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20
  }
});

export default GameOverScreen;
