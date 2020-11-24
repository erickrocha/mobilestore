import { updateObject } from '../../library/utility'
import * as action from './cart.action'

const initialState = {
    loading: false,
    error: null,
    added: false,
    itens: [],
    totalItems: 0.0,
    totalCartInCents: 0,
    payment: { method: 'CREDIT_CARD' },
}

const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case action.CART_BEGIN:
            return updateObject(state, { loading: true, added: false })
        case action.CART_ERROR:
            return updateObject(state, { error: payload.error, added: false })
        case action.ITEM_ADDED:
            return updateObject(state, { ...payload.cart, added: true })
        case action.GET_CART:
            return updateObject(state, { ...payload.cart, loading: false })
        case action.SET_PAYMENT:
            return updateObject(state, { payment: payload.payment })
        default:
            return state
    }
}

export default reducer
