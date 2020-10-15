import axios from '../../axios.config'
import * as action from './showcase.action'

const error = (error) => {
    return {
        type: action.SHOWCASE_ERROR,
        error: error,
        loading: false,
    }
}

export const get = () => {
    return (dispatch) => {
        dispatch({ type: action.SHOWCASE_BEGIN })
        axios
            .get('/api/showcase')
            .then((response) => {
                dispatch({ type: action.GET_SHOWCASE, showcase: response.data })
            })
            .catch((err) => {
                dispatch(error(err.response.data))
            })
    }
}
