import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import t from 'tcomb-form-native';
import axios from 'axios';

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


export default function Formulaire({ navigation }) {
  let [responseDataRegister, setResponseDataRegister] = React.useState('')
  let [responseDataLogin, setResponseDataLogin] = React.useState('')
  let [responseError, setResponseError] = React.useState('')

  const pressHandler = () => {
    navigation.navigate('Home');
  }

  const handleSubmitRegister = () => {
    const value = this._form.getValue();
    console.log('value: ', value);

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
    console.log("im here");
  }

  console.log(responseDataRegister.page);
    const pageRegister =  <Text style={styles.titre} > Register </Text>;
    const pageLogin =  <Text style={styles.titre}> Login </Text>;

    const buttonRegiser = <Button title='Register' onPress={ handleSubmitRegister } />
    const buttonLogin = <Button title='Login' onPress={ handleSubmitLogin } />

    const error =  <Text style={styles.alert}> {responseError.error} </Text>;
    return (
      <View style={styles.container}>
      {responseDataRegister.page === 'Login' ? pageLogin : pageRegister }
      {responseError.error === false ? null : error }
        <Form
         ref={c => this._form = c}
         type={User}
         options={options}
        />
        {responseDataRegister.page === 'Login' ? buttonLogin : buttonRegiser }
      </ View>
    )
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



// <Button title='Go to login' onPress={ pressHandler } />
