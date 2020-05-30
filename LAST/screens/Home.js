import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation, route }) {

  const pressHandler = () => {
    navigation.navigate('About', {name: 'kevin'});
  }

  return (
    <View style={styles.container}>
      <Text>
      Home component !
      </ Text>
      <Button title='go to About' onPress={pressHandler} />
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
