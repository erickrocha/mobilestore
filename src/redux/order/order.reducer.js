import * as action from './order.action'
import { updateObject } from '../../library/utility'

const initialState = {
    loading: false,
    error: null,
    order: {},
}

const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case action.ORDER_BEGIN:
            return updateObject(state, { loading: true })
        case action.ORDER_ERROR:
            return updateObject(state, { error: payload.error, loading: false })
        case action.ORDERED:
            return updateObject(state, { loading: false, order: payload.order })
        default:
            return state
    }
}

export default reducer
