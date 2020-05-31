import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View, Button } from 'react-native';
import Formulaire from './screens/Form';
import Home from './screens/Home';
import SelectImage from './screens/SelectImage';
import ShowSnaps from './screens/ShowSnaps';


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Formulaire">
      <Stack.Screen name="Formulaire" component={Formulaire}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="SelectImage" component={SelectImage} />
      <Stack.Screen name="ShowSnaps" component={ShowSnaps} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
