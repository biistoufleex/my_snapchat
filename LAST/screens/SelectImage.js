import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';


export default function SelectImage() {

  let [selectedImage, setSelectedImage] = React.useState(null);
  // duration
  // to

  let openImagePickerAsync = async () => {

    // if duration && to
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    // liste des utilisateur et recup du mail on click

    // rajouter un parametre mail et duration en plus
    uploadImage(pickerResult.uri);
  };

  uploadImage = async (image_uri) => {
    let api_url = 'http://snapi.epitech.eu/snap';
    let uploadData = new FormData();
    uploadData.append('duration', '5');
    uploadData.append('to', 'Snapy@mail.fr');
    uploadData.append('image', {type: 'image/jpg', uri: image_uri, name: 'myImage.jpg'});
    axios({
    method: 'post',
    url: api_url,
    data: uploadData,
    headers: {'Content-Type': 'multipart/form-data' ,token: "ASmtdtStLHZYpRV9BVKT5hYd"  }
    })
    .then(function (response) {
        //handle success
        console.log(response.data);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.instructions}>
        Send a nude
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
