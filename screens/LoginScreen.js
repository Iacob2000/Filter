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
            <View style={{top:'50%',alignSelf:'center'}}>
                
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
                   
                }}/>
               
                 <Button title= 'Register' onPress = {() => {
                        navigation.navigate('Register')
                    
                }}
                 
               />
            </View>
        )
    }
}
    export default LoginScreen;

