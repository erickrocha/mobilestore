import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider as StoreProvider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Showcase from './screens/Showcase'
import ProductDetail from './screens/ProductDetail'
import Checkout from './screens/Checkout'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'

import showcaseReducer from './redux/showcase/showcase.reducer'
import cartReducer from './redux/cart/cart.reducer'
import authReducer from './redux/auth/auth.reducer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import * as handler from './redux/auth/index'

const composeEnhancers =
    (process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              trace: true,
              traceLimit: 25,
          })
        : null) || compose

const appReducer = combineReducers({
    auth: authReducer,
    showcase: showcaseReducer,
    cart: cartReducer,
})

const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)))

const Stack = createStackNavigator()

library.add(fab, fas)

const App = () => {
    const isAlreadyLogged = handler.isAlreadyLogged()

    return (
        <StoreProvider store={store}>
            <PaperProvider>
                <NavigationContainer>
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
                                <Stack.Screen
                                    name="SignUp"
                                    component={SignUp}
                                />
                            </>
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </StoreProvider>
    )
}

export default App
