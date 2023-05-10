import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { auth } from '../../firebase';
import Logo from '../components/Logo'


const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

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
      {/* Back Button */}
      <Logo/>
      <Text style={styles.titleText}>Create Account</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
            style={styles.inputText}
            placeholder="Email"
            value={email}
            placeholderTextColor="#003f5c"
            left={<TextInput.Icon icon="email"/>}
            onChangeText={(text) => setEmail(text)}
        />

        <TextInput
            style={styles.inputText}
            placeholder="Password"
            value={password}
            placeholderTextColor="#003f5c"
            left={<TextInput.Icon icon="lock"/>}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={handleSignUp}
        style={styles.button}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}

export default SignupScreen

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: '#FAC846',
  },
})
