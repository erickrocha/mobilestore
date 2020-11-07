import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Profile from './screens/Profile'
import Home from './screens/Home'
import Search from './screens/Search'
import Order from './screens/Order'
import Checkout from './screens/Checkout'
import Sumary from './screens/Sumary'
import Wallet from './screens/Wallet'

import { createStackNavigator } from '@react-navigation/stack'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import * as handler from './redux/auth/index'
import * as appHandler from './redux/application/index'
import { useDispatch, useSelector } from 'react-redux'
import { navigationRef } from './NavigationRef'
import * as storageService from './library/storage-service'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBar } from './components'

const Tab = createBottomTabNavigator()

const LoginStack = createStackNavigator()

const AppStack = createStackNavigator()

function Store() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={(props) => <TabBar {...props} />}
        >
            <Tab.Screen
                component={Home}
                name="Home"
                Order={1}
                options={{ icon: 'home' }}
            />
            <Tab.Screen
                component={Search}
                name="Search"
                Order={2}
                options={{ icon: 'search' }}
            />
            <Tab.Screen
                component={Order}
                name="Orders"
                Order={3}
                options={{ icon: 'receipt' }}
            />
            <Tab.Screen
                component={Profile}
                name="Profile"
                Order={4}
                options={{ icon: 'account-circle' }}
            />
        </Tab.Navigator>
    )
}

library.add(fab, fas)

const App = () => {
    // storageService.clear();

    const dispatch = useDispatch()

    const isAlreadyLogged = useSelector((state) => state.auth.token != null)

    useEffect(() => {
        dispatch(handler.isAlreadyLogged())
    }, [])

    useEffect(() => {
        if (isAlreadyLogged) {
            dispatch(appHandler.loadConfig())
        }
    }, [isAlreadyLogged])

    return (
        <NavigationContainer ref={navigationRef}>
            {isAlreadyLogged ? (
                <AppStack.Navigator>
                    <AppStack.Screen
                        name="store"
                        component={Store}
                        options={{ headerShown: false }}
                    />
                    <AppStack.Screen name="Checkout" component={Checkout} />
                    <AppStack.Screen name="Sumary" component={Sumary} />
                    <AppStack.Screen
                        name="Wallet"
                        component={Wallet}
                        options={{ headerShown: false }}
                    />
                </AppStack.Navigator>
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
    )
}

export default App
