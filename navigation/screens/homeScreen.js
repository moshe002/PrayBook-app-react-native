import * as React from 'react'
import { View, Text } from 'react-native'


const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen