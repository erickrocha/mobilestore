import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { updateObject } from '../../library/utility'
import * as handler from '../../redux/auth/index'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const SignIn = ({ navigation }) => {
    const [authData, setAuthData] = useState({})
    const [secure, setSecure] = useState(true)

    const dispatch = useDispatch()

    const login = () => {
        dispatch(handler.authetication(email, password))
    }

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <Input
                    rightIcon={<Icon name="email" size={36} color="green" />}
                    value={authData.email}
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) =>
                        setAuthData(updateObject(authData, { email: text }))
                    }
                />
                <Input
                    rightIcon={
                        <FontAwesomeIcon
                            icon={['fa', 'eye']}
                            onPress={() => setSecure(!secure)}
                            size={36}
                        />
                    }
                    secureTextEntry={secure}
                    value={authData.password}
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) =>
                        setAuthData(updateObject(authData, { password: text }))
                    }
                />
                <Button
                    disabled={!authData.email || !authData.password}
                    titleStyle={{ fontSize: 25 }}
                    buttonStyle={{ padding: 20 }}
                    containerStyle={styles.buttonContaiter}
                    title="Entrar"
                    onPress={() => login()}
                />
                <Text>OU</Text>
                <Button
                    titleStyle={{ fontSize: 25 }}
                    buttonStyle={{
                        padding: 20,
                        justifyContent: 'space-evenly',
                    }}
                    containerStyle={styles.buttonContaiter}
                    title="Cadastrar"
                    type="outline"
                    onPress={() => navigation.navigate('SignUp')}
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
