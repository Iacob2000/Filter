
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen  from './screens/HomeScreen';
import{Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'
const store = createStore(rootReducer,applyMiddleware(thunk))

import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyA0Upsmjz3N5-MfKcwBx4E4SGh36MoctXw",
  authDomain: "filter-app-6c5a3.firebaseapp.com",
  projectId: "filter-app-6c5a3",
  storageBucket: "filter-app-6c5a3.appspot.com",
  messagingSenderId: "98446650180",
  appId: "1:98446650180:web:b0ad28e4e35196e0fec511",
  measurementId: "G-C3LK4Z8P5J"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CameraScreen from './screens/CameraScreen';
import Main from './screens/Main';
import PostScreen from './screens/PostScreen';
const Stack =createStackNavigator();
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
          
        
        
               <NavigationContainer>
               <Stack.Navigator initialRouteName='Register'>
                  <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
                  <Stack.Screen name='Register' component={RegisterScreen}/>
               </Stack.Navigator>
               </NavigationContainer>
       
           )
          }
           return(
           <Provider store={store}>
          <NavigationContainer >
          <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Profile' component={ProfileScreen} />
          <Stack.Screen name='Post' component={PostScreen} navigation ={this.props.navigation}/>
          <Stack.Screen name='Camera' component={CameraScreen} navigation ={this.props.navigation}/>
          <Stack.Screen name='Main' component={Main} navigation ={this.props.navigation}/>

          </Stack.Navigator>  
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