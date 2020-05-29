import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './screens/Home';
import Test from './screens/Test';
import About from './screens/About';
import Formulaire from './screens/Form';
// <Formulaire />

const Stack = createStackNavigator();

export default function App() {

  let isloggedin = false;

  return (
    <Formulaire />
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






// <NavigationContainer>
// <Stack.Navigator initialRouteName="Home">
// <Stack.Screen name="Home" component={Home} />
// <Stack.Screen name="About" component={About} />
// <Stack.Screen name="Test" component={Test} />
// </Stack.Navigator>
// </NavigationContainer>
