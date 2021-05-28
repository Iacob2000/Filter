import React, { Component } from 'react'
import { Button, View } from 'react-native'

 const LoginScreen = (props) => {
    
        return (
            <View>
                <Button title= 'Login' onPress = {() => {
                    props.navigation.navigate({routeName : 'Home'});
                }}/>
               
                 <Button title= 'Register'
               />
            </View>
        )
    }
  
    export default LoginScreen;

