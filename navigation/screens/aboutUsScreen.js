import * as React from 'react'
import { View, Text } from 'react-native'


const AboutUsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold' }}>About Us Screen</Text>
        </View>
    )
}

export default AboutUsScreen