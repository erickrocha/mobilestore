import * as action from './order.action'
import axios from '../../axios.config'
import * as navigation from '../../NavigationRef'

const error = (error) => {
    return {
        type: action.ORDER_ERROR,
        error: error,
        loading: false,
    }
}

export const execute = (order) => {
    return (dispatch) => {
        navigation.navigate('Approval')
        dispatch({ type: action.ORDER_BEGIN })
        axios
            .post('/mobile/order', order)
            .then((response) => {
                dispatch({ type: action.ORDERED, order: response.data })
            })
            .catch((err) => {
                dispatch(error(err.response.data))
            })
    }
}
