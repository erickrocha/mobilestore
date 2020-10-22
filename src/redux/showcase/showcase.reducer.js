import * as action from './showcase.action'
import { updateObject } from '../../library/utility'

const initialState = {
    sections: [],
    loading: false,
    error: null,
}

const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case action.SHOWCASE_BEGIN:
            return updateObject(state, { loading: true })
        case action.SHOWCASE_ERROR:
            return updateObject(state, { error: payload.error })
        case action.GET_SHOWCASE:
            return updateObject(state, { ...payload.showcase })
        default:
            return state
    }
}

export default reducer
