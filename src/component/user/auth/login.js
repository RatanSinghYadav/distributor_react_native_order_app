import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from '../../../assets/styles/loginStyle.js';
import { url } from '../../../utils/constant.js';
import { useNavigation } from '@react-navigation/native';

function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const navigation = useNavigation();

    const handleSubmit = async () => {
       try {
        // console.log( email,  password); 
        const response = await fetch(`${url}/api/v1/user/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });

        // if (!response.ok) {
        //     console.log("login faild");
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }

        const getResponse = await response.json();
        console.log(getResponse);
        navigation.navigate('home')
       } catch (error) {
        console.error('Error user login:', error);
       }
    }

    return (
        <View>
            <Text style={styles.loginText}>Login to Your Account</Text>
            <View style={styles.mainBox}>
                <TextInput value={email} onChangeText={setEmail} style={styles.textBox} placeholder='Email' />
                <TextInput value={password} onChangeText={setPassword} style={styles.textBox} placeholder='Password' />
                <Text style={styles.forgotPass}>Forgot Password?</Text>

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}> Log In </Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'center', marginBottom: 8 }}>
                    <Text>Don't have an account? Signup First</Text>
                </View>


                <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.submitButtonText}>Sign Up</Text>
                </TouchableOpacity>
                <Button title='home' onPress={() => navigation.navigate('home')}>Home</Button>
            </View>
        </View>
    )
}

export default Login