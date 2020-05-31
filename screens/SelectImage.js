import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, FlatList, Button, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';


export default function SelectImage({ navigation, route }) {
  const myToken = route.params.token;

  if (myToken) {
    console.log(myToken);
  }

  let [selectedImage, setSelectedImage] = React.useState(null);
  let [responseData, setResponseData] = React.useState('')
  let [duration, setDuration] = React.useState('')
  let [sendTo, setSendTo] = React.useState('')
  let [responseSnap, setResponseSnap] = React.useState('')

  let recupEmail = (email) => {
    console.log(email);
    setSendTo(email);
  }

  let recupDuration = (time) => {
    setDuration(time)
  }

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    if (pickerResult) {
      setSelectedImage(pickerResult.uri)
    }

    let config = {
      headers: {
        token: myToken,
      }
    }
    axios.get(`http://snapi.epitech.eu/all`, config)
      .then(res => {
        setResponseData(res.data.data)
        console.log(res.data.data);
    })
  };

  uploadImage = async (image_uri, destinataire, timer) => {
    console.log("funcion send" +destinataire + " " + timer);
    let api_url = 'http://snapi.epitech.eu/snap';
    let uploadData = new FormData();
    uploadData.append('duration', timer);
    uploadData.append('to', destinataire);
    uploadData.append('image', {type: 'image/jpg', uri: image_uri, name: 'myImage.jpg'});
    axios({
    method: 'post',
    url: api_url,
    data: uploadData,
    headers: {'Content-Type': 'multipart/form-data' ,token: myToken  }
    })
    .then(function (response) {
        //handle success
        console.log(response.data);
        setResponseSnap(response.data);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
        setResponseSnap(response.data);

    });
  }

  if (duration) {
    uploadImage(selectedImage, sendTo, duration);
    navigation.goBack();
  }

  if (sendTo) {
    return (
      <View style={styles.container}>

      <Text style={styles.instructions}>
      Snap duration :
      </Text>

      <TouchableOpacity onPress={() => {recupDuration(2)}} style={styles.button}>
      <Text style={styles.buttonText}>2 seconde </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {recupDuration(4)}} style={styles.button}>
      <Text style={styles.buttonText}>4 seconde </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {recupDuration(6)}} style={styles.button}>
      <Text style={styles.buttonText}>6 seconde </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {recupDuration(8)}} style={styles.button}>
      <Text style={styles.buttonText}>8 seconde </Text>
      </TouchableOpacity>
      </View>
    )
  }
  if (responseData) {

    return (
      <View style={styles.container}>
        <Text>
          Test component !
        </ Text>
          <FlatList
            data={responseData}
            renderItem={({item}) => <Button onPress={() => {recupEmail(item.email)}} title={item.email} />}
            />

      </ View>
    )
  }
  return (
    <View style={styles.container}>

      <Text style={styles.instructions}>
        Send a nude {myToken}
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
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
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
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
    resizeMode: 'contain',
  },
});
