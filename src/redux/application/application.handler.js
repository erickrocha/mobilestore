import axios from '../../axios.config'
import * as action from './application.action'
import Geolocation from 'react-native-geolocation-service'

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

export const loadLocation = () => {
    return (dispatch) => {
        dispatch({ type: action.APPLICATION_BEGIN })
        Geolocation.getCurrentPosition(
            (position) => {
                dispatch({
                    type: action.APPLICATION_LOCATION,
                    location: position,
                })
            },
            (err) => {
                dispatch({ type: action.APPLICATION_ERROR, error: err })
            },
            { enableHighAccuracy: false, timeout: 60000, maximumAge: 1000 }
        )
    }
}
