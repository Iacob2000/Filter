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

 </View>
    )
}

export default ResultsScreen
