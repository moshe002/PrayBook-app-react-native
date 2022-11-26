import * as React from 'react'
import { View, Text, ScrollView, Pressable } from 'react-native'

import Header from '../components/Header'

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Header param={'PrayBook'}/>
            <View className="mt-20 border-gray-300 border-t-2 border-b-2">
                <View className="p-10">
                    <Text className="text-center leading-5 text-black"><Text className="font-bold">PrayBook </Text> 
                        is a <Text className="italic">church booking application</Text>, 
                        where you can book yourself personal prayers with 
                        a priest, book a mass with your preferred time and 
                        schedule, and many more.</Text>
                </View>
                <View className="p-10">
                    <Text className="text-center leading-5 text-black">
                        This can make the process on 
                        handling commissioned prayers to 
                        the church much more convenient. 
                        This can also automate the receiving of 
                        commissioned prayers and bookings of personal 
                        mass and events.
                    </Text>
                </View>
                <View className="p-10">
                    <Text className="text-center leading-5 text-black">
                        The application features a live mass page, 
                        where you can see and visit live masses 
                        happening in real time. We also cater different prayer 
                        bookings such as: prayers for thanks giving, mass booking 
                        for an upcoming wedding and much more.
                    </Text>
                </View>
            </View>
            <Text className="text-center leading-5 text-black py-14 px-10">
                <Text className="italic font-bold">Contacts and details</Text> are found in our 
                <Pressable onPress={() => {
                    navigation.navigate('About Us')
                }}>
                    <Text className="underline text-blue-400">About Us Page.</Text>
                </Pressable>
            </Text>
        </ScrollView>
    )
}

export default HomeScreen