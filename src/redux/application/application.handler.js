import axios from '../../axios.config'
import * as action from './application.action'
import * as navigation from '../../NavigationRef'

const error = (err) => {
    return {
        type: action.APPLICATION_ERROR,
        error: err,
    }
}

export const loadConfig = () => {
    return (dispatch) => {
        dispatch({ type: action.APPLICATION_BEGIN })
        axios
            .get('/mobile/store/application')
            .then((response) =>
                dispatch({
                    type: action.CONFIGURATION_LOADED,
                    ...response.data,
                })
            )
            .catch((err) => dispatch(error(err.response.data)))
    }
}

export const setAddress = (address) => {
    return (dispatch) => {
        dispatch({ type: action.SET_DELIVERY_ADDRESS, address: address })
        navigation.navigate('Checkout')
    }
}
