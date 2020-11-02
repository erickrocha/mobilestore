import React from 'react'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider as StoreProvider } from 'react-redux'
import App from './App'

import showcaseReducer from './redux/showcase/showcase.reducer'
import cartReducer from './redux/cart/cart.reducer'
import authReducer from './redux/auth/auth.reducer'
import customerReducer from './redux/customer/customer.reducer'
import applicationReducer from './redux/application/application.reducer'
import permissionReducer from './redux/permission/permission.reducer'

import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
})

const appReducer = combineReducers({
    app: applicationReducer,
    auth: authReducer,
    showcase: showcaseReducer,
    cart: cartReducer,
    customer: customerReducer,
    permission: permissionReducer,
})

const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)))

const Redux = (props) => {
    return (
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
    )
}

export default Redux
