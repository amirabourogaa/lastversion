import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

export default function FlatButton({text, onPress}) {
    return (
        <View style={{marginTop: 20}}>
            <Button mode="outlined" color="#e67300" labelStyle={styles.buttonText} onPress={onPress} contentStyle={styles.button}>
                {text}
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width : 250,
        textAlign: 'center',
        fontSize: 16,
        padding: 5,
    },
    buttonText : {
        color : '#e67300',
        fontWeight : 'bold',
        textTransform : 'uppercase',
        fontSize:16,
        textAlign : 'center'
    }
})