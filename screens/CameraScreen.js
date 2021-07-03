import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,Button,Image} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

import PostScreen  from './PostScreen';
import { CommonActions, NavigationContainer } from '@react-navigation/native';

export default function CameraScreen({navigation}) {
  const [hasGaleryPermission, setHasGaleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const CameraStatus  = await Camera.requestPermissionsAsync();
      setHasCameraPermission(CameraStatus.status === 'granted');

      const galeryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGaleryPermission(galeryStatus.status === 'granted');
      
    })();
  }, []);
 const takePicture = async () => {
   if(camera){
     const data = await camera.takePictureAsync(null);
     setImage(data.uri);
   
   }
 }
 const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    setImage(result.uri);
  }
};
  if (hasCameraPermission === null || hasGaleryPermission === false) {
    return <View />;
  }
  if (hasCameraPermission === false || hasGaleryPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{flex:1}}>
      <View style={styles.cameraContainer}>
      <Camera 
       style={styles.fixedRation}
       type={type} 
       ratio={'1:1'}
       ref ={ref => setCamera(ref)}/>
      </View>
      
    
    
      <Button
       title ="Flip Image"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}>
        
      </Button>
      <Button title = "Take a picture" onPress = {() => takePicture()}/>
      <Button  title = "Post" onPress = {() => navigation.navigate('Post',{image})}/>
      <Button title = "Pick a picture from galery " onPress = {() => pickImage()}/>
      {image && <Image source={{uri:image}} style ={{flex:1}}/>}
    </View>
    
  );
}

const styles = StyleSheet.create({  
    cameraContainer:{
      flex:1,
      flexDirection:'row'
    },
    fixedRation:{
      flex:1,
      aspectRatio:1
    }
}); 
