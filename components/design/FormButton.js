import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper'

const FormButton = ({buttonTitle, onPress}) => {
  return (
    <Button style={{marginTop: 15, marginBottom: 50,alignSelf: "stretch"}} onPress={onPress} labelStyle={styles.buttonText} mode="contained" contentStyle={styles.buttonContainer}>
        {buttonTitle}
    </Button>
  )
}

export default FormButton

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});