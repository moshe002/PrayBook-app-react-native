import * as React from 'react'
import { View, Text } from 'react-native'


const BookScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Book Screen</Text>
        </View>
    )
}

export default BookScreen