import React from 'react'
import {View,Button} from 'react-native'
function RegisterScreen(props) {
    return (
        <View>
           <Button title= 'Register' onPress = {() => {
            props.navigation.navigate({routeName : 'Profile'});
        }}/>
       
        </View>
    )
}

export default RegisterScreen;
