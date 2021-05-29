import React from 'react'
import { View ,Button} from 'react-native'

function HomeScreen(props) {
    return (
        <View>
               <Button title= 'Search' onPress = {() => {
            props.navigation.navigate({routeName : 'Result'});
        }}/>
           <Button title= 'Post' onPress = {() => {
            props.navigation.navigate({routeName : 'Post'});
        }}/>
       
            
        </View>
    )
}

export default HomeScreen
