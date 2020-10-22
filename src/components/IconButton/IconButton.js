import React from 'react'
import { StyleSheet, View } from 'react-native'

const IconButton = (props) => {
    const { onPress, icon, label, size } = props
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={onPress}
        >
            <FontAwesomeIcon icon={['fa', icon]} size={size} />
            <View>
                <Text>{label}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 15,
    },
})

export default IconButton
