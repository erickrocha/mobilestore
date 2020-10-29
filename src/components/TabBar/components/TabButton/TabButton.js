import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TabButton = (props) => {
    const { icon, color, size, navigation, route, isFocused } = props

    const onPress = () => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        })

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
        }
    }

    const onLongPress = () => {
        navigation.emit({
            type: 'tabLongPress',
            target: route.key,
        })
    }

    return (
        <TouchableOpacity
            style={styles.root}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => onPress()}
            onLongPress={() => onLongPress()}
        >
            <Icon name={icon} color={color} size={size} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 15,
        flexGrow: 1,
    },
})

export default TabButton
