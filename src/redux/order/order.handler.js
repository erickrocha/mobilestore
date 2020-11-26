import * as action from './order.action'
import axios from '../../axios.config'

const error = (error) => {
    return {
        type: action.ORDER_ERROR,
        error: error,
        loading: false,
    }
}

export const execute = (order) => {
    return (dispatch) => {
        dispatch({ type: action.ORDER_BEGIN })
        // axios.post("/api/mobile/order", order)
        //   .then(response => {
        //     dispatch({ type: action.ORDERED, order: response.data })
        //   })
        //   .catch(err => {
        //     dispatch(error(err.response.data))
        //   })
    }
}
