import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as firebase from 'firebase';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoadingScreen from './screens/LoadingScreen';

var firebaseConfig = {
  apiKey: "AIzaSyDqTN0pHrLVHHPsKZ9dZyd8bd-tsRp0gd0",
  authDomain: "reactnative-app-chat.firebaseapp.com",
  databaseURL: "https://reactnative-app-chat.firebaseio.com",
  projectId: "reactnative-app-chat",
  storageBucket: "reactnative-app-chat.appspot.com",
  messagingSenderId: "923386743070",
  appId: "1:923386743070:web:b6316952a9c72b239d610f",
  measurementId: "G-EE47VNNGF6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name='Loading' component={LoadingScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          )}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
