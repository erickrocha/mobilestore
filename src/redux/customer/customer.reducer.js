import { updateObject } from '../../library/utility'
import * as action from './customer.action'

const initsitalState = {
    loading: false,
    error: null,
    customer: {},
    saved: false,
}

const reducer = (state = initsitalState, payload) => {
    switch (payload.type) {
        case action.CUSTOMER_BEGIN:
            return updateObject(state, { loading: true })
        case action.CUSTOMER_ERROR:
            return updateObject(state, { error: payload.error })
        case action.CUSTOMER_ADDED:
            return updateObject(state, {
                customer: payload.customer,
                loading: false,
                saved: true,
            })
        case action.GET_CUSTOMER:
            return updateObject(state, {
                customer: payload.customer,
                loading: false,
                saved: false,
            })
        default:
            return state
    }
}

export default reducer
