import React, { PureComponent } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PatientScreen from './UserProfile'

const Stack = createStackNavigator()

export class SingleUser extends PureComponent {
    
    render() {
        const { address, email, firstName, lastName, num, role, sourceImg } = this.props.route.params
        
        const user = { address, email, firstName, lastName, num, role, sourceImg }

        let PatientName =  `${firstName} ${lastName}` || 'Patient'

        return (
            <Stack.Navigator>
                <Stack.Screen name={PatientName} component={PatientScreen} options={{ headerShown: true }} initialParams={ { user: user }} />
            </Stack.Navigator>
        )
    }
}

export default SingleUser
