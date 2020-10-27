import React, { useEffect } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Showcase from './screens/Showcase'
import ProductDetail from './screens/ProductDetail'
import Checkout from './screens/Checkout'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import * as handler from './redux/auth/index'
import { useDispatch, useSelector } from 'react-redux'
import { navigationRef } from './NavigationRef'

const Stack = createStackNavigator()

library.add(fab, fas)

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handler.isAlreadyLogged())
    }, [])

    const isAlreadyLogged = useSelector((state) => state.auth.token != null)

    return (
        <PaperProvider>
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    {isAlreadyLogged ? (
                        <>
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
                            <Stack.Screen
                                name="Checkout"
                                component={Checkout}
                            />
                        </>
                    ) : (
                        <>
                            <Stack.Screen
                                name="SignIn"
                                component={SignIn}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen name="SignUp" component={SignUp} />
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}

export default App
