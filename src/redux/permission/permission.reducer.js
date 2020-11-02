import * as action from './permission.action'
import { updateObject } from '../../library/utility'

const initialState = {
    asked: false,
    granted: false,
    loading: false,
    error: null,
}

const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case action.PERMISSION_BEGIN:
            return updateObject(state, { loading: true })
        case action.PERMISSION_ERROR:
            return updateObject(state, { error: payload.error })
        case action.PERMISSION_ASKED:
            return updateObject(state, { asked: payload.asked })
        case action.PERMISSION_GRANTED:
            return updateObject(state, { granted: payload.granted })
        default:
            return state
    }
}

export default reducer
