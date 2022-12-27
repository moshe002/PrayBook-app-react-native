import { View, Text, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { db } from '../../firebase/firebase-config'
import { collection, addDoc } from 'firebase/firestore'

import SubmitButton from '../submitButton'

const fiesta = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      EventLocation: '',
      ChapelLocation: '',
      ChapelDevotee: '',
      ContactNumber: '',
      NumberOfParticipants: '',
      ScheduleDay: '',
      ScheduleTime: '',
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
      const docRef = await addDoc(collection(db, "fiesta"), formData) 
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
      <Text className="text-blue-400 text-xl text-center font-bold">Fiesta Form</Text>
      <View className="mt-5">
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Event Details:</Text>
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Location of the Event:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='EventLocation'
          />
          {errors.EventLocation && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Location of the Chapel:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='ChapelLocation'
          />
          {errors.ChapelLocation && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Chapel Devotee:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='ChapelDevotee'
          />
          {errors.ChapelDevotee && <Text className="text-center text-red-400">This is required.</Text>}
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
          {errors.ContactNumber && <Text className="text-center text-red-400">Number can only accept 11 digits.</Text>}
        </View>
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Other Details:</Text>
          <Controller 
          control={control}
          rules={{
            required: true,
            maxLength: 4,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Number of Participants:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='number-pad'
            />
          )}
          name='NumberOfParticipants'
          />
          {errors.NumberOfParticipants && <Text className="text-center text-red-400">Number can only accept 4 digits.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Schedule (Day):'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='ScheduleDay'
          />
          {errors.ScheduleDay && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Schedule (Time):'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='ScheduleTime'
          />
          {errors.ScheduleTime && <Text className="text-center text-red-400">This is required.</Text>}
        </View>
        { isLoading && <ActivityIndicator size="large" /> }
        { isConnected && <Text className="text-center">Form not submitted. Please check your connection and try again.</Text> }
        <SubmitButton handle={handleSubmit} submit={onSubmit}/>
      </View>
    </View>
  )
}

export default fiesta