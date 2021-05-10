import React, { PureComponent } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AccountScreen from './Account'

const Stack = createStackNavigator()

export class AdminDashboard extends PureComponent {
    render() {
        return (
            <Stack.Navigator initialRouteName="Compte">
                <Stack.Screen name="Compte" component={AccountScreen} options={{ headerShown: true }} />
            </Stack.Navigator>
        )
    }
}

export default AdminDashboard




