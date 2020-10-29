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
            <TabButton
                icon="home"
                size={32}
                isFocused={state.index === 0}
                navigation={navigation}
                route={state.routes.find((current) => current.name === 'Home')}
                descriptors={descriptors}
            />
            <TabButton
                icon="search"
                size={32}
                isFocused={state.index === 1}
                navigation={navigation}
                route={state.routes.find(
                    (current) => current.name === 'Search'
                )}
                descriptors={descriptors}
            />
            <TabButton
                icon="receipt"
                size={32}
                isFocused={state.index === 2}
                navigation={navigation}
                route={state.routes.find(
                    (current) => current.name === 'Orders'
                )}
                descriptors={descriptors}
            />
            <TabButton
                icon="account-circle"
                isFocused={state.index === 3}
                size={32}
                navigation={navigation}
                route={state.routes.find(
                    (current) => current.name === 'Profile'
                )}
                descriptors={descriptors}
            />
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
