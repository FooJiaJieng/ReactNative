//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimension, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, 
  Platform, StatusBar, TouchableNativeFeedback, TouchableHighlight, 
  TouchableOpacity, View, Image, Button, Alert, Dimensions 
  } from 'react-native';
import { useDimensions, useDeviceOrientation 
  } from "@react-native-community/hooks";
import WelcomeScreen from './app/Screens/WelcomeScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';


  //can write like onPress={handlePress} or/ onPress={()=>console.log("Text Tapped")}
  // const handlePress = () => console.log("Text pressed");

    // The <Text></Test> below list the type of image and effect when tapped
      // {/* <Text numberOfLines={0}>
      //   Finally, i can use thngrain hoyaaaa yeeee wohoooo what i am doing now i want to ply game me so dasdsadddd why this world so triing aiyoooooo what happen o poor meup!
      //   </Text>
      //   {/* <TouchableOpacity onPress={() => console.log("Image Tapped")}> */}
      //   {/* <TouchableHighlight onPress={() => console.log("ImageTapped")}> */}
      //    {/* <Image 
      //     blurRadius={0.5}
      //     //only for android 1000=1second
      //     fadeDuration={0}
      //      source={{
      //       width: 200,
      //       height: 300,
      //      uri: "http://picsum.photos/200/300"}} /> */         
      //   // </TouchableOpacity>
      //      // </TouchableHighlight> 
      //     }
      //   {/* <TouchableNativeFeedback onPress={() => console.log("ImageTapped")}>
      //   <View style={{width:200, height:70, backgroundColor: "dodgerblue"}}/>
      //   </TouchableNativeFeedback> */}
     
     //SafeAreaView is View, can have array like style={[a,b,c]} 
     //const is like a func, or to declare something
      //<SafeAreaView style={[styles.container, containerStyle]}></SafeAreaView>
      //const containerStyle = {backgroundColor: "black"};

     //How to use Button, 2type of alert msg can be used  
      // <Button 
         //   color="orange" 
         //   title="Click Me" 
         //   onPress={() => console.log("ButtonTapped")
         
         //first type
         //    Alert,prompt only works in IOS  
         //    Alert.prompt("My Title", "My Message", text => console.log(text))
         
         //second type
         //    Alert.alert("My Title", "My message", 
         //    [
         //      {text: "Yes", onPress:() => console.log("YES!")},
         //      {text: "No", onPress:() => console.log("NO!")},
         //    ])
        
        //  }
        // />

  //This is to show how to rotate screen and change the size of the image
  //when screen rotated    
    // const {landscape}  = useDeviceOrientation();

     // return (
     //   //SafeAreaView only for IOS
     //   <SafeAreaView style={styles.container}>
     //    <View style={{
     //      backgroundColor:"dodgerblue",
     //      width: '100%',
     //      height: landscape ? "100%" : "30%",
     //    }}>
     //    </View>
     //   </SafeAreaView>
     //   )

     //This is how you can play with the alignment 
        //  <View 
        //   style={{
        //     backgroundColor: "#fff",
        //     flew: 1,
        //     flexDirection: "row",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     alignContent: "center",
        //     flexWrap: "wrap",
        // }}>
        //   <View 
        //    style={{
        //      backgroundColor: "dodgerblue",
        //      width: 100,
        //      height: 300, 
        //    }} />

        //   <View 
        //    style={{
        //     backgroundColor: "tomato",
        //     width: 100,
        //     height: 100, 
        //   }} />

        //   <View 
        //    style={{
        //     backgroundColor: "gold",
        //     width: 100,
        //     height: 100,
        //   }} />

        //   <View 
        //    style={{
        //     backgroundColor: "grey",
        //     width: 100,
        //     height: 100,
        //   }} />

        //   <View 
        //    style={{
        //     backgroundColor: "black",
        //     width: 100,
        //     height: 100,
        //   }} /> 

        // </View>
    
       //This is how you play with the style and alignment 
          // <View 
          // style={{
          //   backgroundColor: "#fff",
          //   flex: 1,
          //   flexDirection: "row",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   alignContent: "center", 
          //flexWrap: "wrap", //to fix the shape or box in a area. 
          //like i could more the shape to left and right but not up and down
          // }}>
          //   <View 
          //    style={{
          //      backgroundColor: "dodgerblue",
          //      width: 100,
          //      height: 100, 
          //    }} />
      
          //   <View 
          //    style={{
          //     backgroundColor: "tomato",
          //     width: 100,
          //     height: 100, 
          //     bottom: 20,
          //     left: 20,
          //     position: "relative",
          //   }} />
      
          //   <View 
          //    style={{
          //     backgroundColor: "gold",
          //     width: 100,
          //     height: 100,
          //   }} />
      
      
          // </View> 

export default function App() {

  return ( 
  <WelcomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
   // justifyContent: 'center',
   //For android 
   // paddingTop: Platform.OS = "android" ? StatusBar.currentHeight : 0 ,
  },
});
