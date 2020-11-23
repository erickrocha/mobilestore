import axios from '../../axios.config'
import * as action from './cart.action'
import * as navigation from '../../NavigationRef'

const error = (error) => {
    return {
        type: action.CART_ERROR,
        error: error,
        loading: false,
    }
}

export const addItem = (params) => {
    return (dispacth) => {
        dispacth({ type: action.CART_BEGIN })
        axios
            .post('/mobile/cart', params)
            .then((response) => {
                dispacth({ type: action.ITEM_ADDED, cart: response.data })
                navigation.navigate('Showcase')
            })
            .catch((err) => {
                dispacth(error(err.response.data))
            })
    }
}

export const get = () => {
    return (dispacth) => {
        dispacth({ type: action.CART_BEGIN })
        axios
            .get('/mobile/cart')
            .then((response) => {
                dispacth({ type: action.GET_CART, cart: response.data })
            })
            .catch((err) => {
                dispacth(error(err.response.data))
            })
    }
}

export const setPayment = (payment) => {
    return (dispatch) => {
        dispacth({ type: action.CART_BEGIN })
        dispatch({ type: action.SET_PAYMENT, payment: payment })
        navigation.goBack()
    }
}
