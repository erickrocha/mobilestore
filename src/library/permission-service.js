const { Platform } = require('react-native')
import { PERMISSIONS, check, RESULTS, request } from 'react-native-permissions'

export const hasLocationPermission = () => {
    let res = RESULTS.DENIED
    ;async () => {
        switch (Platform.OS) {
            case 'android':
                res = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
                break
            case 'ios':
                res = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
                break
            default:
                res = RESULTS.DENIED
                break
        }
    }
    return res === RESULTS.GRANTED
}

export const getLocationPermission = () => {
    let res = RESULTS.DENIED
    ;async () => {
        switch (Platform.OS) {
            case 'android':
                res = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
                break
            case 'ios':
                res = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
                break
            default:
                res = RESULTS.DENIED
                break
        }
    }
    return res === RESULTS.GRANTED
}
