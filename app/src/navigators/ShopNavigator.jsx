import BreadDetailScreen from '../screens/BreadDetailScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'
import { Platform } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (

        <Stack.Navigator
            initialRouteName="Home"
            options={{
                headerStyle: { backgroundColor: Platform.OS === "android" ? colors.primary : "" },
                headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
                headerTitleStyle: { fontWeight: "Bold" },
            }}
        >
            <Stack.Screen
                name="Home"
                component={CategoriesScreen}
                options={{
                    title: "Panaderia AP"
                }}
            />
            <Stack.Screen
                name="Breads"
                component={CategoryBreadScreen}
                options={({ route }) => ({ title: route.params.name })}
            />
            <Stack.Screen
                name="Detail"
                component={BreadDetailScreen}
                options={({ route }) => ({ title: route.params.name })}
            />
        </Stack.Navigator>
    )
}

export default ShopNavigator