import * as React from 'react'
import { View, Text } from 'react-native'


// header component
const Header = ({ param }) => {
    return(
        <View className="mt-28">
            <Text className="text-blue-400 font-bold text-4xl text-center">{param}</Text>
        </View>
    )
}

export default Header