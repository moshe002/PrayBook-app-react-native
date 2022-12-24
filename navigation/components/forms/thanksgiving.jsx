import { View, Text, TextInput, Alert } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

//import * as firebase from 'firebase'
import { db } from '../../firebase/firebase-config'

import SubmitButton from '../submitButton'

const thanksgiving = () => {
  
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      SenderName: '',
      ContactNumber: '',
      SenderAddress: '',
      PrayerReason: '',
    }
  });

  const onSubmit = async (formData) => {
    try {
      //on submit to firebase here
      //const db = firebase.firestore()
      await db.collection('thanksgiving').add(formData)
      console.log("data submitted successfully!")
    } catch (error) {
      console.error(error)
    }
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
          name='SenderName'
          />
          {errors.SenderName && <Text className="text-center text-red-400">This is required.</Text>}
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
        <SubmitButton handle={handleSubmit} submit={onSubmit} />
      </View>
    </View>
  )
}

export default thanksgiving