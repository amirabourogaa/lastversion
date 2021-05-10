import React from 'react'
import { ImageBackground, StyleSheet, View, Image } from 'react-native'
import bgImg from '../../images/bgOrange.jpg'
import FlatButton from '../../components/Buttons/button'
import LoginButton from '../../components/Buttons/loginButton'

export default function Landing({ navigation }) {
    return (
        <ImageBackground blurRadius={2} style={styles.backgroundContainer} source={bgImg} >
            <View style={styles.welcomeView}>
               <Image
                    style={{width : 300, height: 200}}
                    source={require ('../../images/logo_2.png')}
               />
            </View>
        
            <LoginButton 
                text="Se Connecter"
                onPress={()=> navigation.navigate("Login")}
            />

            <FlatButton 
                text ="Creer Un Compte"
                onPress={()=> navigation.navigate("Register")} 
            />
        </ImageBackground>
    )
}

var styles = StyleSheet.create({
    backgroundContainer: {
        flex : 1,
        width: null,
        height: null ,
        justifyContent: "flex-start",
        alignItems:'center',
        overlayColor: 'black'
    },
    welcomeView : {
        alignItems : 'center',
        marginTop: 50,
    }
  });
