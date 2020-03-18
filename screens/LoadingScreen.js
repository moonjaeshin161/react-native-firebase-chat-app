import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LoadingScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            navigation.navigate(user ? 'HomeScreen' : 'Login')
        }
        )
    }, []);

    return (
        <View style={styles.container}>
            <Text>Loading....</Text>
            <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});