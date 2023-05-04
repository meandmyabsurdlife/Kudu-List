import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import React from 'react'
import { auth, firebase } from '../../firebase'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { useState } from 'react';

//https://github.com/itzpradip/react-navigation-v6-mix

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  const handleLogin = () => {
    // Handle log in
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Logged in with:', user.email)
      })
      .catch(error => alert(error.message))
  }

  const handleSignUp = () => {
    // Handle sign up
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Signed up with:',user.email)
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/*
      <Image
          source={require('../assets/Logo ke-5@2x.png')}
          style={styles.image}
        />
      */}
      <Text style={styles.titleText}>Hi, Welcome !</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
            style={styles.inputText}
            placeholder="Email"
            value={email}
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setEmail(text)}
        />

        <TextInput
            style={styles.inputText}
            placeholder="Password"
            value={password}
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}

export default LoginScreen

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '80%',
  },
  image:{
    height:'200',
    width:'200',

  },
  titleText:{
    fontSize: 32,
    marginBottom: 40,
  },
  inputContainer: {
    width: '80%',
  }, 
  inputText: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#FAC846',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#FAC846',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#FAC846',
    fontWeight: '700',
    fontSize: 16,
  },
})
