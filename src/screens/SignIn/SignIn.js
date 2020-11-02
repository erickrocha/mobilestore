import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import * as handler from '../../redux/auth/index'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { clientId } from '../../../app.json'
import { FlashMessage } from '../../components'
import { PERMISSIONS, check, RESULTS, request } from 'react-native-permissions'
import * as permissionService from '../../library/permission-service'

const SignIn = ({ route, navigation }) => {
    const [email, setEmail] = useState(route.params?.email)
    const [password, setPassword] = useState(route.params?.password)
    const [secure, setSecure] = useState(true)

    const dispatch = useDispatch()

    const login = () => {
        dispatch(handler.authetication(email, password, clientId))
    }

    const saved = useSelector((state) => state.customer.saved)

    return (
        <SafeAreaView style={styles.root}>
            {saved ? <FlashMessage /> : null}
            <View style={styles.container}>
                <Input
                    rightIcon={<Icon name="email" size={36} color="green" />}
                    value={email}
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setEmail}
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
                    value={password}
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setPassword}
                />
                <Button
                    disabled={!email || !password}
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
    info: {
        padding: 15,
        backgroundColor: '#228b22',
        color: '#ffffff',
        alignContent: 'center',
        justifyContent: 'center',
    },
})

export default SignIn
