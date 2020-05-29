import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import axios from 'axios';

export default function Test() {

  let [responseData, setResponseData] = React.useState('')

  // const getAll = () => {

    let config = {
      headers: {
        token: 'uwvadocCZJcsmuS9YjPYbUGU',
      }
    }
    axios.get(`http://snapi.epitech.eu/all`, config)
      .then(res => {
        setResponseData(res.data.data)
        // console.log(res.data.data[0].email);
    })
    // console.log(responseData[0]);
  // }


  return (
    <View style={styles.container}>
      <Text>
        Test component !
      </ Text>
      <FlatList
         data={responseData}
         renderItem={({item}) => <Text style={styles.item}>{item.email}</Text>}
       />
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
