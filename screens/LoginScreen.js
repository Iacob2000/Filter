import React, { Component } from 'react'
import { Button, View ,TextInput} from 'react-native'

 export class LoginScreen extends Component {
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
                    this.onSignUp()
                    props.navigation.navigate({routeName : 'Profile'});
                }}/>
               
                 <Button title= 'Register' onPress = {() => {
                    props.navigation.navigate({routeName : 'Register'});
                }}
                 
               />
            </View>
        )
    }
}
    export default LoginScreen;

