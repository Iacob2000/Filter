import React from 'react';
import {View,Button} from 'react-native';

function PostScreen(props) {
    return (
        <View>
        <Button title= 'Home' onPress = {() => {
     props.navigation.navigate({routeName : 'Home'});
 }}/>

 </View>
    )
}

export default PostScreen
