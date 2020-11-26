import React from 'react'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { Waiting } from '../../components'

const Approval = () => {
    const waiting = useSelector((state) => state.order.loading)

    if (waiting) {
        return <Waiting />
    } else {
        return <View style={styles.root}></View>
    }
}

const styles = StyleSheet.create({
    root: {
        padding: 15,
    },
})

export default Approval
