import React from 'react'
import {View,Button} from 'react-native';
function ResultsScreen(props) {
    return (
        <View>
        <Button title= 'Home' onPress = {() => {
     props.navigation.navigate({routeName : 'Home'});
 }}/> 
          <Button title= 'Chat' onPress = {() => {
     props.navigation.navigate({routeName : 'Chat'});
 }}/>
 <Button title= 'Go to user profile' onPress = {() => {
     props.navigation.navigate({routeName : 'User'});
 }}/>

 </View>
    )
}

export default ResultsScreen
