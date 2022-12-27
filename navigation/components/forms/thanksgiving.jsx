import { View, Text, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { db } from '../../firebase/firebase-config'
import { collection, addDoc } from 'firebase/firestore'

import SubmitButton from '../submitButton'

const thanksgiving = () => {
  
  const [isLoading, setIsLoading] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      SenderName: '',
      ContactNumber: '',
      SenderAddress: '',
      PrayerReason: '',
    }
  });

  const onSubmit = async (formData) => { 
    Alert.alert(
      '',
      'Form has been submitted, Thank you!',
      [
        // {
        //   text: 'Cancel',
        //   onPress: () => console.log('Cancel Pressed'),
        //   style: 'cancel',
        // },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    ) 
    try {
      setIsLoading(true)
      const docRef = await addDoc(collection(db, "thanksgiving"), formData) 
      //on submit to firebase here 
      console.log("document written, ID: ", docRef.id)
      console.log("data submitted successfully!")
      setIsLoading(false)
      console.log(formData)    
    } catch (error) {
      console.error(error)
      setIsConnected(true)
    }
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
          name='SenderName'
          />
          {errors.SenderName && <Text className="text-center text-red-400">This is required.</Text> }
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
          name='SenderAddress'
          />
          {errors.SenderAddress && <Text className="text-center text-red-400">This is required.</Text>}
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
          name='PrayerReason'
          />
          {errors.PrayerReason && <Text className="text-center text-red-400">This is required.</Text>}
        </View>
        { isLoading && <ActivityIndicator size="large" /> }
        { isConnected && <Text className="text-center">Form not submitted. Please check your connection and try again.</Text> }
        <SubmitButton handle={handleSubmit} submit={onSubmit} />
      </View>
    </View>
  )
}

export default thanksgiving