import { updateObject } from '../../library/utility'
import * as action from './cart.action'

const initialState = {
    loading: false,
    error: null,
    added: false,
}

const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case action.CART_BEGIN:
            return updateObject(state, { loading: true, added: false })
        case action.CART_ERROR:
            return updateObject(state, { error: payload.error, added: false })
        case action.ITEM_ADDED:
            return updateObject(state, { ...payload.cart, added: true })
        default:
            return state
    }
}

export default reducer
