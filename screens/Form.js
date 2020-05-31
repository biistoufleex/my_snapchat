import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import t from 'tcomb-form-native';
import axios from 'axios';
import Home from './Home';
import SelectImage from './SelectImage';

const Stack = createStackNavigator()

const Form = t.form.Form;

const Email = t.subtype(t.Str, (email) => {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
});

const Password = t.subtype(t.Str, (password) => {
  const reg = /^([a-zA-Z\-0-9]){5,30}$/;
  return reg.test(password);
});

const User = t.struct({
  email: Email,
  password: Password
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
  }
}

const options = {
  fields: {
    email: {
      type: 'email',
      error: 'Please enter a valid email.'
    },
    password: {
      type: 'password',
      error: 'Passwrd must contain between 5 and 30 charactere.'
    },
  },
   stylesheet: formStyles,
};


export default function Formulaire({ navigation, route }) {
  let [responseDataRegister, setResponseDataRegister] = React.useState('')
  let [responseDataLogin, setResponseDataLogin] = React.useState('')
  let [responseError, setResponseError] = React.useState('')
  let [token, setToken] = React.useState('')
  let [deconnection, setDeconnection] = React.useState('')

  const goToHome = () => {
    navigation.navigate('Home', {token: token});
  }

  let changePage = () => {
    console.log("here");
    if (responseDataRegister === 'Login') {
      setResponseDataRegister({page: "Register"})
    } else {
      setResponseDataRegister({page: "Login"})
    }
  }

  const pressHandler = () => {
    navigation.navigate('Home');
  }

  const handleSubmitRegister = () => {
    // console.log('register');
    const value = this._form.getValue();
    // console.log('value register: ', value);

    axios.post('http://snapi.epitech.eu/inscription', value).then(response => {
      if(response.status == 200){
          setResponseDataRegister({page: "Login"})
          setResponseError({error: false})
      }
    }).catch(error => {
      setResponseError({error: "email " + error.response.data.data.email[0]})
    })
  }

  const handleSubmitLogin = () => {
    // console.log('function login');
    const value = this._form.getValue();
    // console.log('value login: ', value);

    axios.post('http://snapi.epitech.eu/connection', value).then(response => {
      if(response.status == 200){
          console.log(response.data.data.token);
          setToken({token: response.data.data.token})
      }
    }).catch(error => {
      console.log(error.response.data.data);
      setResponseError({error: error.response.data.data})
    })
  }

    const pageRegister =  <Text style={styles.titre} > Register </Text>;
    const pageLogin =  <Text style={styles.titre}> Login </Text>;

    const buttonRegiser = <Button title='Register' onPress={ handleSubmitRegister } />
    const buttonLogin = <Button title='Login' onPress={ handleSubmitLogin } />

    const switchPage = <Button title="i have an account" onPress={ changePage } />

    const error =  <Text style={styles.alert}> {responseError.error} </Text>;

    if (token) {
      return (
      <View style={styles.container}>
        <Text>
          Bienvenue
        </ Text>
        <Button title='Aller au menus' onPress={goToHome} />
      </ View>
    )
    }
    else {

      return (
        <View style={styles.container}>
        {responseDataRegister.page === 'Login' ? pageLogin : pageRegister }
        {responseError.error === false ? null : error }
          <Form
           ref={c => this._form = c}
           type={User}
           options={options}
          />
          {responseDataRegister.page === 'Login' ? buttonLogin : buttonRegiser}
          {responseDataRegister.page === 'Login' ? null : switchPage}






        </ View>
      )
    }
  }
  //rajouter un lien 'deja inscrit' qui passe responseDataRegister.page a login

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    titre: {
      textAlign: 'center',
      color: 'Dark',
      fontSize: 30,
      marginBottom: 7,
      fontWeight: '600'
    },
    alert: {
      textAlign: 'center',
      color: 'red',
      fontSize: 20,
      marginBottom: 7,
      fontWeight: '600'
    },
  });
