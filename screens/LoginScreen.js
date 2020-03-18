import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
    const [errorMessage, setErrorMessage] = useState();
    const [inputs, setInputs] = useState({ email: '', password: '' });

    const navigation = useNavigation();

    const changeHandler = (value, name) => {
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const loginHandler = () => {
        const { email, password } = inputs;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(error => setErrorMessage(error.message))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>{`Hello again.\n Welcome back.`}</Text>

            <View style={styles.errorMessage}>
                {
                    errorMessage && <Text style={styles.error}>{errorMessage}</Text>
                }
            </View>

            <View style={styles.form}>
                <Text style={styles.inputTitle}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    onChangeText={(value) => changeHandler(value, 'email')}
                    value={inputs.email}
                    name='email'

                />
            </View>

            <View style={styles.form}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize='none'
                    onChangeText={(value) => changeHandler(value, 'password')}
                    value={inputs.password}
                    name='password'
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={loginHandler}
            >
                <Text style={{ color: '#FFF', fontWeight: '500' }}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ alignSelf: 'center', marginTop: 32 }}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={{ color: '#414959', fontSize: 13 }}>
                    New to SocialApp?
                    <Text style={{ fontWeight: '500', color: '#E9446A' }}>Sign Up</Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },
    form: {
        marginBottom: 40,
        marginHorizontal: 30,
    },
    inputTitle: {
        color: '#8A8F9E',
        fontSize: 10,
        textTransform: 'uppercase'
    },
    input: {
        borderBottomColor: '#8A8F9E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161F3D'
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: '#E9446A',
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center'
    }
});