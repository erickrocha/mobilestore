import axios from '../../axios.config'
import * as action from './auth.action'
import * as dateHandler from '../../library/date-service'
import AsyncStorage from '@react-native-community/async-storage'
import * as constants from '../../library/constants'

const error = (error) => {
    return {
        type: action.AUTH_ERROR,
        error: error,
        loading: false,
    }
}

export const authetication = (email, password) => {
    return (dispatch) => {
        dispatch({ type: action.AUTH_BEGIN })
        const authData = {
            email: email,
            password: password,
        }
        axios
            .post('/login', authData)
            .then((response) => {
                const expirationDate = dateHandler
                    .getToday()
                    .add(response.data.expireIn, 'ms')
                AsyncStorage.setItem(constants.TOKEN, response.data.token)
                AsyncStorage.setItem(
                    constants.EXPIRATION_DATE,
                    expirationDate.format(dateHandler.ISO_DATE_TIME)
                )
                dispatch({ type: action.SIGNIN, token: response.data.token })
            })
            .catch((err) => {
                dispatch(error(err.response.data))
            })
    }
}

export const logout = () => {
    AsyncStorage.removeItem(constants.TOKEN)
    AsyncStorage.removeItem(constants.EXPIRATION_DATE)
}

export const isAlreadyLogged = () => {
    const token = AsyncStorage.getItem(constants.TOKEN)
    const expirationDate = dateHandler.getDateTime(
        AsyncStorage.getItem(constants.EXPIRATION_DATE)
    )
    if (
        token !== null &&
        expirationDate.isValid() &&
        expirationDate.isAfter(dateService.getTodayNow())
    ) {
        return true
    } else {
        AsyncStorage.removeItem(constants.TOKEN)
        AsyncStorage.removeItem(constants.EXPIRATION_DATE)
        return false
    }
}
