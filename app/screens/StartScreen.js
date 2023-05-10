import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../components/Logo';

const StartScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.buttonContainer}>
                {/*navigation.navigate(value dari name= di App.js) */}
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default StartScreen

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#FAC846',
      borderWidth: 2,
    },
    buttonOutlineText: {
      color: '#FAC846',
      fontWeight: '700',
      fontSize: 16,
    },
})
  