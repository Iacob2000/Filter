import React from 'react';
import {View,Button} from 'react-native';

function FilterScreen() {
    return (
        <View>
        <Button title= 'Search' onPress = {() => {
     props.navigation.navigate({routeName : 'Result'});
 }}/>

 </View>
    )
}

export default FilterScreen

