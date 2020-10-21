import React from 'react'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider as StoreProvider } from 'react-redux'
import App from './App'

import showcaseReducer from './redux/showcase/showcase.reducer'
import cartReducer from './redux/cart/cart.reducer'
import authReducer from './redux/auth/auth.reducer'

import { setNavigator } from './navigationRef'

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

const Redux = (props) => {
    return (
        <StoreProvider store={store}>
            <App ret={(navigator) => setNavigator(navigator)} />
        </StoreProvider>
    )
}

export default Redux
