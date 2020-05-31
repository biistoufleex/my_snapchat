import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ShowSnaps({ navigation, route }) {
  let [recupToken, setRecupToken] = React.useState('')
  const myToken = route.params.name;

  const pressHandler = () => {
    navigation.navigate('SelectImage');
  }

  return (
    <View style={styles.container}>
      <Text>
      on afiche no snap ici
      </ Text>
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
