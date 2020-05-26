import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import splash from './assets/splash.png';
export default function App() {

  let a = 2
  if (a === 1 ) {

    return (
      <View style={styles.container}>
        <Text style={styles.instruction}>
          Ici
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>
        la
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instruction: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  },
});
