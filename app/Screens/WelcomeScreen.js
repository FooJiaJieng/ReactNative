import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style = {styles.background}
            source={require("../assets/cuteshima.png")}
        
        >
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/yurucamp.png")}/>
            <Text>Hey!Hey!Hey!</Text> 
          </View>
           
          <View style={styles.loginButton}></View>
          <View style={styles.RegisterButton}></View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width:'100%',
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logo: {
        width: 150,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    RegisterButton: {
        width:'100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    }
})

export default WelcomeScreen;