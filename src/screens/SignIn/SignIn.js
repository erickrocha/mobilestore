import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import * as handler from '../../redux/auth/index'

const SignIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const login = () => {
        dispatch(handler.authetication(email, password))
    }

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Input
                    textContentType="emailAddress"
                    value={email}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    textContentType="password"
                    value={password}
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                />
                <Button
                    titleStyle={{ fontSize: 25 }}
                    buttonStyle={{ padding: 20 }}
                    containerStyle={styles.buttonContaiter}
                    title="Entrar"
                    onPress={() => login()}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flexGrow: 1,
    },
    container: {
        padding: 15,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContaiter: {
        width: '100%',
        padding: 15,
    },
})

export default SignIn
