import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { ListItem, Payment, SubTotal, Title } from '../../components'
import Address from '../../components/Address'
import PersonalData from '../../components/PersonalData'

const Sumary = (props) => {
    const cart = useSelector((state) => state.cart)
    const address = useSelector((state) => state.customer.address)
    const customer = useSelector((state) => state.customer.customer)
    const payment = cart.payment
    const availables = useSelector((state) => state.app.payments)
    const selected = availables.filter(
        (currrent) => currrent.method === payment.method
    )

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView>
                <PersonalData title="Dados Pessoais" person={customer} />
                <View>
                    <Title title="Endereço de entrega" />
                    <Address address={address} />
                </View>
                <ListItem title="Items do pedido" items={cart.items} />
                <Divider />
                <SubTotal cart={cart} />
                <Divider />
                <Payment cart={cart} />
                <Divider />
                <Text style={styles.termo_uso}>
                    Ao confirmar o pedido, automaticamente você concorda com
                    nossoes termos e uso do serviço de entrega
                </Text>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => alert('comprei')}
                    style={styles.order}
                >
                    <View>
                        <Text style={{ fontSize: 25 }}>
                            Confirmar - R${' '}
                            {(cart.finalAmountInCents / 100).toFixed(2)}
                        </Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 5,
        flex: 1,
        backgroundColor: 'white',
    },
    termo_uso: {
        padding: 5,
        textAlign: 'justify',
    },
    order: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        borderColor: 'cornflowerblue',
        borderWidth: 1,
        borderRadius: 5,
    },
})

export default Sumary
