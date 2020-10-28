import React from 'react'
import Showcase from '../Showcase'
import ProductDetail from '../ProductDetail'
import Checkout from '../Checkout'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Home = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Showcase"
                component={Showcase}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Detail"
                component={ProductDetail}
                options={({ route }) => ({
                    title: route.params.product.name,
                })}
            />
            <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>
    )
}

export default Home
