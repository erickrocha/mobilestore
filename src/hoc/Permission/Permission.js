import React, { useEffect } from 'react'
import { PERMISSIONS, check, RESULTS, request } from 'react-native-permissions'
import { useDispatch, useSelector } from 'react-redux'
import * as handler from '../../redux/permission/index'

const Permission = (props) => {
    const { permission } = props

    const hasLocationPermission = useSelector(
        (state) => state.permission.granted === RESULTS.GRANTED
    )

    const dispatch = useDispatch()

    const handleLocationPermission = async () => {
        if (!hasLocationPermission) {
            const granted = await request(permission)
            dispatch(handler.setPermission(permission, granted))
        }
    }

    useEffect(() => {
        handleLocationPermission()
    }, [])

    return props.children
}

export default Permission
