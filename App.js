import React from 'react';
import { NavigationContainer, createSwitchNavigator } from '@react-navigation/native';
import LoadingScreen from './screens/LoadingScreen';

import * as firebase from 'firebase';

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
  return (
    <LoadingScreen />
  )
}

export default App;
