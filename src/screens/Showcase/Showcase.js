import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import * as handler from '../../redux/showcase/index'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { Section } from '../../components'

const Showcase = ({ navigation }) => {
    const sections = useSelector((state) => state.showcase.sections)
    const [expanded, setExpanded] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handler.get())
    }, [])

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView style={styles.root}>
                {sections.map((section) => (
                    <Section
                        key={section.id}
                        section={section}
                        navigation={navigation}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'lightgray',
        flexGrow: 1,
    },
})

export default Showcase
