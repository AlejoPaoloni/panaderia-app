import CartScreen from '../screens/CartScreen'
import { Platform } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{
                headerStyle: { backgroundColor: Platform.OS === 'android' ? colors.primary : '' },
                headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
                headerTitleStyle: { fontWeight: 'bold' }
            }}
        >
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{ title: 'Carrito' }}
            />


        </Stack.Navigator>
    )
}

export default CartNavigator