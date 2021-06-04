import React, { Component } from 'react'
import { Button, View ,TextInput} from 'react-native';
import firebase from 'firebase'

 export class LoginScreen extends Component {
    constructor(props) {
        super(props);
     this.state = { 
       email :'',
       password:'',
     }
     this.onSignUp=this.onSignUp.bind(this)
    }
    onSignUp(){
     const {email,password} = this.state;
     firebase.auth().signInWithEmailAndPassword(email,password)
     .then((result) =>{
         console.log('login');
     })
     .catch((error) =>{
        console.log(error);
    })
    }
    render(){
        return (
            <View>
                
                <TextInput  
                placeholder='email'
                onChangeText ={(email)=> this.setState({email})}
                />
                <TextInput  
                placeholder='Password'
                secureTextEntry={true}
                onChangeText ={(password)=> this.setState({password})}
                />
                <Button title= 'Login' onPress = {() => {
                     this.onSignUp()
                    this.props.navigation.navigate({routeName : 'Profile'});
                }}/>
               
                 <Button title= 'Register' onPress = {() => {
                      
                    this.props.navigation.navigate({routeName : 'Register'});
                }}
                 
               />
            </View>
        )
    }
}
    export default LoginScreen;

