import * as React from 'react'
import { View, Text, ScrollView, Pressable, Linking, Image } from 'react-native'

import Header from '../components/Header'

const AboutUsScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Header param={'About Us'}/>
            <View className="flex flex-col">
                <View className="p-10 border-b-2 border-b-gray-300">
                    <Text className="text-black text-center leading-5">
                        This <Text className="font-bold">Application/Project</Text> aims to collaborate 
                        with <Text className="italic">churches and religious institutions</Text> so that
                        the goal and concepts will be met. Furthermore, 
                        any messages and inquiries towards the project will 
                        be accommodated by the <Text className="font-bold">developer/s</Text>. 
                    </Text>
                </View>
                <View className="p-10 border-b-2  border-gray-300">
                    <Text className="text-center text-2xl text-black font-semibold">
                        Donate to Charity
                    </Text>
                    <Text className="mt-5 text-center text-black font-semibold">
                        Children's Shelter of Cebu:
                        <Pressable onPress={() => {Linking.openURL('https://cebushelter.org/')}}>
                            <Text className="mt-3 text-blue-500">cebushelter.org</Text>
                        </Pressable>
                    </Text>
                    <Text className="mt-5 text-center text-black font-semibold">
                        Agape Charity Events:
                        <Pressable onPress={() => {Linking.openURL('https://agapecharityevents.org/')}}>
                            <Text className="mt-3 text-blue-500">agapecharityevents.org</Text>
                        </Pressable>
                    </Text>
                </View>
                <View className="p-10 gap-3 border-b-2 border-gray-300">
                    <View className="flex flex-col justify-center items-center">
                        <Image source={require('../images/formal2.jpg')} style={{ width: 140, height: 140, borderRadius: 100, borderWidth: 3, borderColor: "black" }}/>
                    </View>
                    <Text className="text-center text-black"><Text className="font-bold">Creator:</Text> Moses Anthony Y. Fat</Text>
                    <Text className="text-center text-black"><Text className="font-bold">Email:</Text> mosesfat@gmail.com</Text>
                    <Text className="text-black font-bold text-center">Contact me through:</Text>
                    <View className="flex flex-row items-center justify-between">
                        <Pressable onPress={() => {
                            Linking.openURL('https://www.facebook.com/mosesanthony873')
                        }}><Text className="text-blue-500">Facebook</Text></Pressable>
                        <Pressable onPress={() => {
                            Linking.openURL('https://github.com/moshe002')
                        }}><Text className="text-gray-500">Github</Text></Pressable>
                        <Pressable onPress={() => {
                            Linking.openURL('https://twitter.com/_mosheee')
                        }}><Text className="text-blue-400">Twitter</Text></Pressable>
                    </View>
                </View>
                <Text className="p-10 italic text-center">
                    "This application is not involved 
                    in any affiliations with any local or 
                    international churches and religious 
                    institutions due to the fact that this is 
                    only a personal project of the developer. 
                    This is not a legitimate application."
                </Text>
            </View>
        </ScrollView>
    )
}

export default AboutUsScreen