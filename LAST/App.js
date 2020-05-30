import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View, Button } from 'react-native';
import Formulaire from './screens/Form';
import SelectImage from './screens/SelectImage';


const Stack = createStackNavigator();

export default function App() {

  return (
    <SelectImage />
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
