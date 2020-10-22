import { updateObject } from '../../library/utility'
import * as action from './auth.action'

const initialState = {
    loading: false,
    error: null,
    token: null,
}

const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case action.AUTH_BEGIN:
            return updateObject(state, { error: null, loading: true })
        case action.SIGNIN:
            return updateObject(state, { loading: false, token: payload.token })
        case action.REQUIRE_AUTHENTICATION:
            return updateObject(state, { loading: false, token: null })
        case action.AUTH_ERROR:
            return updateObject(state, { error: payload.error, loading: false })
        default:
            return state
    }
}

export default reducer
