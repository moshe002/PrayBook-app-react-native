import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'

import Header from '../components/Header'

const MassScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Header param={"Mass Recordings"}/> 
        </ScrollView>
    )
}

export default MassScreen