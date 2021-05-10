import React, { PureComponent } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PatientsScreen from './Patients'

const Stack = createStackNavigator()

export class Users extends PureComponent {
    render() {
        return (
            <Stack.Navigator initialRouteName="Patients">
                <Stack.Screen name="Patients" component={PatientsScreen} options={{ headerShown: true }} />
            </Stack.Navigator>
        )
    }
}

export default Users
