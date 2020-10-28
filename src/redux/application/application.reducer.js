import * as action from './application.action'

const initialState = {
    me: {},
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
        default:
            return state
    }
}

export default reducer
