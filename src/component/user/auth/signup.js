import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import styles from '../../../assets/styles/loginStyle.js';
import { url } from '../../../utils/constant.js';

function Signup({ navigation }) {
    const [name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = async () => {
        // console.log(name, email, phone, password);
        try {
            // console.log(email, password);
            const response = await fetch(`${url}/api/v1/user/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    password: password,
                }),
            });

            // if (!response.ok) {
            //     console.log("login faild");
            //     throw new Error(`HTTP error! Status: ${response.status}`);
            // }

            const getResponse = await response.json();
            console.log("after send api: ", getResponse);
            navigation.navigate('Login')
        } catch (error) {
            console.error('Error user login:', error);
        }
    }

    return (
        <View>
            <Text style={styles.loginText}>Create New Account</Text>
            <View style={styles.mainBox}>
                {/* <Text onPress={() => navigation.navigate('home')}>Login</Text> */}
                <TextInput value={name} onChangeText={setFullName} style={styles.textBox} placeholder='Full Name' />
                <TextInput value={email} onChangeText={setEmail} style={styles.textBox} placeholder='Email' />
                <TextInput value={phone} onChangeText={setPhone} style={styles.textBox} placeholder='Phone Number' />
                <TextInput value={password} onChangeText={setPassword} style={styles.textBox} placeholder='Password' />
                {/* <Text style={styles.forgotPass}>Forgot Password?</Text> */}

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}> Sign Up </Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'center', marginBottom: 8 }}>
                    <Text>Already have an account? Log In </Text>
                </View>


                <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.submitButtonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Signup