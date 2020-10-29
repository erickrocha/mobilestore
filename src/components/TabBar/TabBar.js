import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TabButton from './components/TabButton/TabButton'

const TabBar = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options

    if (focusedOptions.tabBarVisible === false) {
        return null
    }

    return (
        <View style={styles.root}>
            {state.routes.map((route, index) => (
                <TabButton
                    key={index}
                    icon={descriptors[route.key]?.options?.icon}
                    size={32}
                    isFocused={state.index === index}
                    navigation={navigation}
                    route={route}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})

export default TabBar
