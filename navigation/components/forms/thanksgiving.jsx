import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import SubmitButton from '../submitButton'

const thanksgiving = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      Name: '',
      ContactNumber: '',
      CompleteAddress: '',
      ThanksgivingPrayer: '',
    }
  });

  const onSubmit = (formData) => {
    //on submit to firebase here
    console.log(formData)
    //console.log('hello thanksgiving')
  }

  return (
    <View className="mt-10">
      <Text className="text-blue-400 text-xl text-center font-bold">Thanksgiving Prayer Form</Text>
      <View className="mt-5">
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Form Details:</Text>
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Name of the Sender:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='Name'
          />
          {errors.Name && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
            maxLength: 11,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Contact Number:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='number-pad'
            />
          )}
          name='ContactNumber'
          />
          {errors.ContactNumber && <Text className="text-center text-red-400">This is required and will accept 11 digits only.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Complete Home Address:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='CompleteAddress'
          />
          {errors.CompleteAddress && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              className="border-2 rounded-lg border-gray-500 p-3"
              placeholder='Reason for Thanksgiving Prayer:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
              multiline={true}
              numberOfLines={5}
            />
          )}
          name='ThanksgivingPrayer'
          />
          {errors.ThanksgivingPrayer && <Text className="text-center text-red-400">This is required.</Text>}
        </View>
        <SubmitButton handle={handleSubmit} submit={onSubmit} />
      </View>
    </View>
  )
}

export default thanksgiving