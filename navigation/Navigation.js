import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScrren';
import FilterScreen from '../screens/FilterScreen';
import PostScreen from '../screens/PostScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResultsScreen from '../screens/ResultsScreen';
import AnotherProfile from '../screens/AnotherProfile'

import { createAppContainer} from 'react-navigation'



const FilterNavigation = createStackNavigator({
    Login : LoginScreen ,
    Home : HomeScreen,
    Chat : ChatScreen,
    Filter : FilterScreen,
    Post : PostScreen,
    Profile : ProfileScreen,
    Register : RegisterScreen,
    Result : ResultsScreen, 
    User   : AnotherProfile
});

export default createAppContainer( FilterNavigation);