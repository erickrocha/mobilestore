import axios from '../../axios.config'
import * as action from './cart.action'

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
            .post('/api/cart', params)
            .then((response) => {
                dispacth({ type: action.ITEM_ADDED, cart: response.data })
            })
            .catch((err) => {
                dispacth(error(err.response.data))
            })
    }
}
