import * as action from './cart.action'

const initialState = {
    loading: false,
    error: null,
}

const reducer = (state = initialState, payload) => {
    switch (paylod.type) {
        case action.CART_BEGIN:
            return updateObject(state, { loading: true })
        case action.CART_ERROR:
            return updateObject(state, { error: paylod.error })
        case action.ITEM_ADDED:
            return updateObject(state, { ...paylod.cart })
        default:
            return state
    }
}
