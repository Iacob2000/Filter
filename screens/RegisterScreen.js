import React, { Component } from 'react'
import { Button, View ,TextInput} from 'react-native';
import firebase from 'firebase'

 export class RegisterScreen extends Component {
    constructor(props) {
        super(props);
     this.state = {
       name:'',  
       email :'',
       password:'',
     }
     this.onSignUp=this.onSignUp.bind(this)
    }
    onSignUp(){
     const {name,email,password} = this.state;
     firebase.auth().createUserWithEmailAndPassword(email,password)
     .then((result) =>{
         firebase.firestore().collection("users")
         .doc(firebase.auth().currentUser.uid)
         .set({
             name,
             email
         })
         console.log(result);
     })
     .catch((error) =>{
        console.log(error);
    })
    }
    render(){
        return (
            <View>
                <TextInput  
                placeholder='name'
                onChangeText ={(name)=> this.setState({name})}
                />
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
                   
                    this.props.navigation.navigate({routeName : 'Profile'});
                }}/>
               
                 <Button title= 'Register' onPress = {() => {
                      this.onSignUp()
                    this.props.navigation.navigate({routeName : 'Register'});
                }}
                 
               />
            </View>
        )
    }
}
    export default RegisterScreen;


