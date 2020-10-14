import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { ExpandableTitle, ProductList } from './components'

const Section = (props) => {
    const { section } = props
    const [expanded, setExpanded] = useState(true)

    const Body = expanded ? <ProductList items={section.products} /> : null
    return (
        <View style={styles.root}>
            <ExpandableTitle
                title={section.name}
                size={32}
                icon={section.icon}
                expanded={expanded}
                setExpanded={setExpanded}
            />
            {Body}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 10,
    },
})

export default Section
