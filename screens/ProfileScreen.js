import React, { Component } from 'react';
import {View,Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser} from '../redux/actions/index';
export class ProfileScreen extends Component {
    componentDidMount() {
        this.props.fetchUser();

    }
    render(){
    const {currentUser} = this.props;
    console.log(currentUser  )
        return (
    <View>
 
    <Button title= 'Home' onPress = {() => {
        props.navigation.navigate({routeName : 'Home'});
     }}/>
   
     
  
     </View>
    )
    }
 
        
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps= (dispatch) => bindActionCreators({fetchUser},dispatch)
  
export default connect(mapStateToProps, mapDispatchProps)(ProfileScreen);