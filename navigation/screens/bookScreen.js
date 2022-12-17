import React from 'react'
import { View, ScrollView, Text, Pressable } from 'react-native'

import Header from '../components/Header'
import Baptism from '../components/forms/baptism'
import Wedding from '../components/forms/wedding'
import Fiesta from '../components/forms/fiesta'
import Forthedead from '../components/forms/ftd'
import Thanksgiving from '../components/forms/thanksgiving'

const BookScreen = ({ navigation }) => {

    const choices = [
        'Baptism', 
        'Fiesta', 
        'Mass for the Dead', 
        'Wedding', 
        'Thanksgiving Prayer'
    ]

    return (
        <ScrollView>
            <Header param={"Book Prayers"}/>
            <View className="border-2 p-5 flex items-center justify-evenly">
                {
                    choices.map((choice) => {
                        return (
                            <View key={Math.random()} className="border-2 flex justify-center items-center w-40">
                                <Pressable>
                                    <Text className="text-black">
                                        {choice}
                                    </Text>
                                </Pressable>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default BookScreen