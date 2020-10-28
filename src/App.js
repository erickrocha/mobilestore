import React, { useEffect } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import { NavigationContainer } from '@react-navigation/native'

import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Profile from './screens/Profile'
import Home from './screens/Home'
import { createStackNavigator } from '@react-navigation/stack'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import * as handler from './redux/auth/index'
import { useDispatch, useSelector } from 'react-redux'
import { navigationRef } from './NavigationRef'
import * as storageService from './library/storage-service'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const LoginStack = createStackNavigator()

library.add(fab, fas)

const App = () => {
    // storageService.clear();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handler.isAlreadyLogged())
    }, [])

    const isAlreadyLogged = useSelector((state) => state.auth.token != null)

    return (
        <PaperProvider>
            <NavigationContainer ref={navigationRef}>
                {isAlreadyLogged ? (
                    <Tab.Navigator>
                        <Tab.Screen component={Home} name="Home" />
                        <Tab.Screen component={Profile} name="Profile" />
                    </Tab.Navigator>
                ) : (
                    <LoginStack.Navigator>
                        <LoginStack.Screen
                            name="SignIn"
                            component={SignIn}
                            options={{ headerShown: false }}
                        />
                        <LoginStack.Screen name="SignUp" component={SignUp} />
                    </LoginStack.Navigator>
                )}
            </NavigationContainer>
        </PaperProvider>
    )
}

export default App
