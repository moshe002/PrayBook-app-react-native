import React, { useState } from 'react'
import { View, ScrollView, Text, Pressable } from 'react-native'

import Header from '../components/Header'
import Baptism from '../components/forms/baptism'
import Wedding from '../components/forms/wedding'
import Fiesta from '../components/forms/fiesta'
import Forthedead from '../components/forms/ftd'
import Thanksgiving from '../components/forms/thanksgiving'

const BookScreen = ({ navigation }) => {

    const [isRendered, setIsRendered] = useState()

    const choices = [
        'Baptism', 
        'Fiesta', 
        'Mass for the Dead', 
        'Wedding', 
        'Thanksgiving Prayer'
    ]

    handlePress = (index) => {
        setIsRendered(index)
    }

    return (
        <ScrollView>
            <Header param={"Book Prayers"}/>
            <View className="mt-5 p-3">
                <Text className="text-center text-black">Choose what Prayer or Event you want to book</Text>
            </View>
            <View className="p-3 pt-10 flex-1 flex-row flex-wrap justify-around gap-3">
                {
                    choices.map((choice, index) => {
                        return (
                            <View key={index} className="p-5 w-40 rounded-xl bg-blue-400">
                                <Pressable onPress={() => this.handlePress(index)}>
                                    <Text className="text-white font-semibold text-center">
                                        {choice}
                                    </Text>
                                </Pressable>
                            </View>
                        )
                    })
                }
            </View>
            { isRendered === 0 && <Baptism /> }
            { isRendered === 1 && <Fiesta /> }
            { isRendered === 2 && <Forthedead /> }
            { isRendered === 3 && <Wedding /> }
            { isRendered === 4 && <Thanksgiving /> }
        </ScrollView>
    )
}

export default BookScreen