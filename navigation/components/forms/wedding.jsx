import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import SubmitButton from '../submitButton'

const wedding = () => {

  return (
    <View className="mt-10">
      <Text className="text-blue-400 text-xl text-center font-bold">Wedding Form</Text>
    </View>
  )
}

export default wedding
