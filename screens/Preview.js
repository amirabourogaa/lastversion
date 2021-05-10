
import React from 'react'
import { Text, SafeAreaView, StyleSheet, View } from 'react-native'
import Slider from '@react-native-community/slider';
import {  Input, Item} from 'native-base';
import {TouchableRipple} from 'react-native-paper';


export default function Preview({ navigation }) {
    return (
      
        <SafeAreaView style = {styles.container}>
             <Text style = {styles.quest}>
                 Combien de répititions avez-vous fait ?
            </Text>
           
            
           <Item style= {{marginBottom:20, marginTop:20, backgroundColor : '#ffd4b1', height:40}} rounded>
              <Input placeholder=''/>
          </Item>

            <Text style = {styles.quest}>
                Quel est l'intensité de votre douleur ?  (De 1 à 10)
            </Text>
            
           <Slider
                style={{width:'100%', height: 100}}
                minimumValue={0}
                maximumValue={10}
                step = {1}
                minimumTrackTintColor="#191970"
                maximumTrackTintColor="black"
            /> 
           <Text style = {styles.quest} >
               L'exercice a été difficile d'éxécuter?
            </Text>
            
            <Item style= {{marginBottom:20, marginTop:20, backgroundColor : '#ffd4b1', height:40}} rounded>
              <Input placeholder=''/>
          </Item>
           <Text style = {styles.quest}>
               Avez-vous fait tout les exercices proposés ?
            </Text>
            
            <Item style= {{marginBottom:20, marginTop:20, backgroundColor : '#ffd4b1',height:40}} rounded>
              <Input placeholder=''/>
          </Item>
            <Text style = {styles.quest}>
              Ils ont été facile à faire ?
            </Text>
            
            <Item style= {{marginBottom:20, marginTop:20, backgroundColor : '#ffd4b1', height:40}} rounded>
              <Input placeholder=''/>
          </Item>
            
            <TouchableRipple onPress={ ()=> alert ('Votre Bilan a bien été envoyé ') }>
                <View style={{ borderRadius : 80, alignItems : 'center', justifyContent :'center',height: 40,  backgroundColor: '#ffd4b1',}}>
                   
                    <Text style={{fontSize: 20,color: '#191970', fontWeight:'bold' }}>Envoyer</Text>
                </View>
            </TouchableRipple>

        </SafeAreaView >
      
    )
}

const styles = StyleSheet.create({
  
    container: {
      marginTop: 30,
      marginLeft:20,
      marginRight:20,
    
    },
    quest : {
        fontSize: 16,
        fontWeight: 'bold'
    }
  
})