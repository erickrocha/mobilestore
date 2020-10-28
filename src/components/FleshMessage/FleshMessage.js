import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

const FlashMessage = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
        }).start()
    }, [fadeAnim])

    return (
        <Animated.View style={{ ...styles.root, opacity: fadeAnim }}>
            <Text style={styles.messge}>
                Usuário cadastrado efetue o login!
            </Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 15,
        justifyContent: 'center',
    },
    messge: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
    },
})

export default FlashMessage
