import { calculateCordinates, updateObject } from '../../library/utility'
import * as action from './application.action'

const initialState = {
    me: {},
    region: {
        latitude: -22.596482,
        longitude: -47.4167617,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    },
    loading: false,
    error: null,
}

const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case action.APPLICATION_BEGIN:
            return updateObject(state, {
                success: false,
                loading: true,
            })
        case action.CONFIGURATION_LOADED:
            return updateObject(state, {
                loading: false,
                ...payload,
            })
        case action.APPLICATION_ERROR:
            return updateObject(state, {
                error: payload.error,
                success: false,
                loading: false,
            })
        case action.APPLICATION_LOCATION:
            return updateObject(state, {
                loading: false,
                region: calculateCordinates(payload.location),
            })
        default:
            return state
    }
}

export default reducer
