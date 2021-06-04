
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBrDXBWu2QL-vKikTJ2Wa0_zuOb98-0Ot8",
  authDomain: "filter-app-32ed4.firebaseapp.com",
  projectId: "filter-app-32ed4",
  storageBucket: "filter-app-32ed4.appspot.com",
  messagingSenderId: "894848608942",
  appId: "1:894848608942:web:57149a6147b47e019d5b3f",
  measurementId: "G-W21YM91B45"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


import LoginScreen from './screens/LoginScreen';
import FilterNavigation from './navigation/Navigation'

export default function App() {
  return (
  <FilterNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});