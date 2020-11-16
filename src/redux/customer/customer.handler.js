import axios from '../../axios.config'
import * as action from './customer.action'
import * as navigation from '../../NavigationRef'

const error = (error) => {
    return {
        type: action.CUSTOMER_ERROR,
        error: error,
        loading: false,
    }
}

export const get = () => {
    return (dispatch) => {
        dispatch({ type: action.CUSTOMER_BEGIN })
        axios
            .get('/mobile/crm/customers')
            .then((response) => {
                dispatch({ type: action.GET_CUSTOMER, customer: response.data })
            })
            .catch((err) => {
                dispatch(error(err.response.data))
            })
    }
}

export const save = (customerData) => {
    return (dispatch) => {
        dispatch({ type: action.CUSTOMER_BEGIN })
        axios
            .post('/mobile/crm/customers', customerData)
            .then((response) => {
                dispatch({
                    type: action.CUSTOMER_ADDED,
                    customer: response.data,
                })
                navigation.navigate('SignIn', {
                    email: customerData.email,
                    password: customerData.password,
                })
            })
            .catch((err) => {
                dispatch(error(err.response.data))
            })
    }
}

export const addCard = (card) => {
    return (dispatch) => {
        dispatch({ type: action.CUSTOMER_BEGIN })
        axios
            .post('/mobile/crm/customers/card', card)
            .then((response) => {
                dispatch({
                    type: action.CUSTOMER_ADDED,
                    customer: response.data,
                })
                navigation.goBack()
            })
            .catch((err) => {
                dispatch(error(err.response.data))
            })
    }
}
