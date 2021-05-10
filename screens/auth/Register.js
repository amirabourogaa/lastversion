import React, { Component } from 'react'
import { View,  SafeAreaView, ScrollView } from 'react-native' 
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import SocialButton from '../../components/design/SocialButton'
import FormButton from '../../components/design/FormButton'
import FormInput from '../../components/design/FormInput'

export class Register extends Component {
    constructor(props) {
        super(props);
            this.state = {
              email: '',
              password: '',
              lastName: '',
              firstName: '',
              num: '',
              address: '',
            }
    }

    onSignUp = () => {
        const { email, password, lastName, firstName, address, num }= this.state

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.firestore().collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({
                firstName,
                lastName,
                num,
                email,
                address,
                password,
                role: "client",
                sourceImg: "https://icon-library.com/images/user-profile-icon/user-profile-icon-12.jpg",
                videos: [],
                reviews: []
            }) 
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <ScrollView>
                    <View style={{flex: 1, marginVertical: 5, marginHorizontal: 10}}>
                        <FormInput
                            placeholderText="Nom"
                            iconType="user"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(lastName)=> this.setState({ lastName })}
                        />
                        <FormInput
                            placeholderText="Prénom"
                            iconType="user"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(firstName)=> this.setState({ firstName })}
                        />

                        <FormInput
                            placeholderText="Numéro de téléphone"
                            iconType="phone"
                            keyboardTypeType="number-pad"
                            autoCorrect={false}
                            onChangeText={(num)=> this.setState({ num })}
                        />
                        <FormInput
                            placeholderText="Adresse"
                            iconType="home"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={(address)=> this.setState({ address })}
                        />
                        <FormInput
                            placeholderText="Adresse e-mail"
                            iconType="mail"
                            autoCapitalize="none"
                            keyboardTypeType="email-address"
                            autoCorrect={false}
                            onChangeText={(email)=> this.setState({ email })}
                        />
                        <FormInput
                            placeholderText="Mot de passe"
                            iconType="lock"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            onChangeText={(password)=> this.setState({ password })}
                        />

                        <FormButton 
                               buttonTitle="S'enregistrer"                       
                               onPress={() => {this.onSignUp()}}
                        />
                
                        <SocialButton 
                                buttonTitle="S'inscrire avec Google"
                                btnType="google"
                                color="#de4d41"
                                backgroundColor="#f5e7ea"
                                onPress={() => {}}
                        />

                        <SocialButton 
                                buttonTitle="S'inscrire avec Facebook"
                                btnType="facebook"
                                color="#4867aa"
                                backgroundColor="#e6eaf4"
                                onPress={() => {}}
                            />      
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Register
