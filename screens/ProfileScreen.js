import React, { Component } from 'react';
import {View,Button,Text,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser} from '../redux/actions/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import CameraScreen  from './CameraScreen';
import MaterialCommunityIcons from'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();
export class ProfileScreen extends Component {
    componentDidMount() {
        this.props.fetchUser();

    }
    render(){
  
        return (
        
            <Tab.Navigator initialRouteName="Home" labeled={false}>
              <Tab.Screen name="Home" component= {HomeScreen}
               listeners= {({navigation}) =>({
                tabPress: event =>{
                  event.preventDefault();
                  navigation.navigate("Home")
                }
              })}
              options={{
                tabBarIcon:({color,size}) =>(
                  <MaterialCommunityIcons name ='home' color ={color} size={26}/>
                )
              }}
              />
        
        <Tab.Screen name="Camera" component={CameraScreen} 
              listeners= {({navigation}) =>({
              tabPress: event =>{
                event.preventDefault();
                navigation.navigate("Camera")
              }
            })}
              options={{
                tabBarIcon:({color,size}) =>(
                  <MaterialCommunityIcons name ='plus-box' color ={color} size={26}/>
                )
              }}
          />
              
            </Tab.Navigator>
             
    )
    }
 
   
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps= (dispatch) => bindActionCreators({fetchUser},dispatch)
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default connect(mapStateToProps, mapDispatchProps)(ProfileScreen);