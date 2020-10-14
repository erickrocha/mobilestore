import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { List } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import * as handler from '../../redux/showcase/index'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { Section } from '../../components'

const Showcase = () => {
    const sections = useSelector((state) => state.showcase.sections)
    const [expanded, setExpanded] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handler.get())
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                {sections.map((section) => (
                    <Section key={section.uuid} section={section} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Showcase
