import axios from '../../axios.config'
import * as action from './auth.action'
import * as dateHandler from '../../library/date-service'
import * as storageService from '../../library/storage-service'

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
                storageService.setItem('@token', response.data.token)
                storageService.setItem(
                    '@expiration_date',
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
    storageService.removeItem('@token')
    storageService.removeItem('expiration_date')
}

export const isAlreadyLogged = () => {
    return (dispatch) => {
        dispatch({ type: action.AUTH_BEGIN })
        const token = storageService.getItem('@token')
        const expirationDate = dateHandler.getDateTime(
            storageService.getItem('@expiration_date')
        )
        if (
            token !== null &&
            expirationDate.isValid() &&
            expirationDate.isAfter(dateService.getTodayNow())
        ) {
            dispatch({ type: action.SIGNIN, token: token })
        } else {
            storageService.removeItem('@token')
            storageService.removeItem('@expiration_date')
            dispatch({ type: action.REQUIRE_AUTHENTICATION })
        }
    }
}
