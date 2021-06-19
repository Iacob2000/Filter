
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './screens/ProfileScreen';
import{Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'
const store = createStore(rootReducer,applyMiddleware(thunk))

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
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      loaded: false,
    }
  }
componentDidMount(){
  firebase.auth().onAuthStateChanged((user) => {
    if(!user){
      this.setState({
        loggedIn:false,
        loaded:true
      })
    }else{
      this.setState({
        loggedIn:true,
        loaded:true
    })
  }
  })
}
  render() {
    const {loggedIn,loaded}= this.state;
    if(!loaded){
    return(
      <View style={{flex:1,justifyContent:'center'}}>
        <Text>loading</Text>
      </View>
    )
    }
    if(!loggedIn){
      
      return(
    
        <ProfileScreen/>
      
        )
      }
      return(
      
        <Provider store={store}>
          <NavigationContainer>
          <FilterNavigation/>
          </NavigationContainer>
       </Provider>
      )
      }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});