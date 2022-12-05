import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'

import Header from '../components/Header'

const BookScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Header param={"Book Prayers"}/>
        </ScrollView>
    )
}

export default BookScreen