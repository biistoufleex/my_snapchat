import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function About({ navigation, route }) {
  let [recupToken, setRecupToken] = React.useState('')
  const myToken = route.params.name;

  const pressHandler = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text>
      {myToken}
      </ Text>

      <Button title='go to Home' onPress={pressHandler} />
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
