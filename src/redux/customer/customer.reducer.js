import { updateObject } from '../../library/utility'
import * as action from './customer.action'

const initsitalState = {
    loading: false,
    error: null,
    customer: {},
    saved: false,
    address: null,
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
        case action.SET_CUSTOMER_ADDRESS: {
            return updateObject(state, {
                address: payload.address,
            })
        }
        default:
            return state
    }
}

export default reducer
