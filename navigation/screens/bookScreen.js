import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

import Header from '../components/Header'
import Baptism from '../components/forms/baptism'
import Wedding from '../components/forms/wedding'
import Fiesta from '../components/forms/fiesta'
import Forthedead from '../components/forms/ftd'
import Thanksgiving from '../components/forms/thanksgiving'

const BookScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Header param={"Book Prayers"}/>
            <View className="border-2 mt-10 flex flex-wrap">
                <Pressable><Text className="text-black text-lg">Baptism</Text></Pressable>
                <Pressable><Text className="text-black text-lg">Fiesta</Text></Pressable>
                <Pressable><Text className="text-black text-lg">Mass for the Dead</Text></Pressable>
                <Pressable><Text className="text-black text-lg ">Thanksgiving Prayer</Text></Pressable>
                <Pressable><Text className="text-black text-lg">Wedding</Text></Pressable>
            </View>
        </ScrollView>
    )
}

export default BookScreen