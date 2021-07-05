
import React from 'react'
import { View ,Button} from 'react-native'

function HomeScreen(props) {
    return (
        <View>
               <Button title= 'Search' onPress = {() => {
            props.navigation.navigate({routeName : 'Filter'});
        }}/>
           <Button title= 'Post' onPress = {() => {
            props.navigation.navigate({routeName : 'Post'});
        }}/>
                <Button title= 'Chat' onPress = {() => {
     props.navigation.navigate({routeName : 'Chat'});
 }}/>
       
            
        </View>
    )
}

export default HomeScreen