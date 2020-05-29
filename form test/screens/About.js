import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function About({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('Test');
  }

  return (
    <View style={styles.container}>
      <Text>
      About component !
      </ Text>

      <Button title='go to Test' onPress={pressHandler} />
    </ View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
