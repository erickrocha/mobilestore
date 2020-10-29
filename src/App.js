import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Profile from './screens/Profile'
import Home from './screens/Home'
import Search from './screens/Search'
import Order from './screens/Order'

import { createStackNavigator } from '@react-navigation/stack'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import * as handler from './redux/auth/index'
import { useDispatch, useSelector } from 'react-redux'
import { navigationRef } from './NavigationRef'
import * as storageService from './library/storage-service'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBar } from './components'

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
        <NavigationContainer ref={navigationRef}>
            {isAlreadyLogged ? (
                <Tab.Navigator
                    initialRouteName="Home"
                    tabBar={(props) => <TabBar {...props} />}
                >
                    <Tab.Screen component={Home} name="Home" Order={1} />
                    <Tab.Screen component={Search} name="Search" Order={2} />
                    <Tab.Screen component={Order} name="Orders" Order={3} />
                    <Tab.Screen component={Profile} name="Profile" Order={4} />
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
    )
}

export default App
