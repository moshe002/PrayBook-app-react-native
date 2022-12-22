import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const submitButton = ({ handle, submit }) => {
  return (
    <View className="flex justify-center items-center mt-5 mb-5">
        <TouchableOpacity className="p-3 w-1/2 rounded-xl bg-blue-400" onPress={handle(submit)}>
            <Text className="text-center text-lg text-white font-semibold">Submit</Text>
        </TouchableOpacity>
    </View>
  )
}

export default submitButton