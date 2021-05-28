import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import { createAppContainer} from 'react-navigation'



const FilterNavigation = createStackNavigator({
    Login : LoginScreen ,
    Home : HomeScreen
});

export default createAppContainer( FilterNavigation);