import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SelectImage from './SelectImage';

export default function Home({ navigation, route }) {
  const myToken = route.params.token;
  
  if (myToken) {
    console.log(myToken.token);
  }

  const sendAsnap = () => {
    navigation.navigate('SelectImage', {token: myToken.token});
  }

  const showSnap = () => {
    navigation.navigate('ShowSnaps', {token: myToken.token});
  }

  const deconnection = () => {
    navigation.navigate('Formulaire', {deco: true});
  }

  return (
    <View style={styles.container}>
      <Text>
      Home component ! {myToken.token}
      </ Text>
      <Button title='Send a Snap' onPress={sendAsnap} />
      <Button title='My snaps' onPress={showSnap} />
      <Button title='deconnection' onPress={deconnection} />
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
