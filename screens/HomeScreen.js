import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

export default function HomeScreen() {
    const [user, setUser] = useState({ email: '', displayName: '' });

    useEffect(() => {
        const { email, displayName } = firebase.auth().currentUser;

        setUser({ email, displayName })
    }, [])

    const signOutUser = () => {
        firebase.auth().signOut();
    }

    return (
        <View style={styles.container}>
            <Text>Hi {user.email}</Text>

            <TouchableOpacity style={{ marginTop: 32 }} onPress={signOutUser}>
                <Text>Logout</Text>
            </TouchableOpacity>
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