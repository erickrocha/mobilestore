import * as action from './permission.action'
import * as storageService from '../../library/storage-service'
import { PERMISSIONS, RESULTS } from 'react-native-permissions'

export const setPermission = (permission, granted) => {
    return (dispatch) => {
        storageService.setItem(permission, granted)
        dispatch({ type: action.PERMISSION_GRANTED, granted: granted })
    }
}

export const getAllPermissionGranted = () => {
    return (dispatch) => {
        storageService
            .getItem(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            .then((response) =>
                dispatch({ type: action.PERMISSION_GRANTED, granted: response })
            )
    }
}
