import { View, Text, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { db } from '../../firebase/firebase-config'
import { collection, addDoc } from 'firebase/firestore'

import SubmitButton from '../submitButton'

const baptism = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      NameOfChild: '',
      AgeOfChild: '',
      BirthdateOfChild: '',
      BirthplaceOfChild: '',
      NameOfFather: '',
      NameOfMother: '',
      AddressOfParents: '',
      ContactNumberOfParents: '',
      NumberOfParticipants: '',
      ScheduleDay: '',
      ScheduleTime: ''
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
      const docRef = await addDoc(collection(db, "baptismal"), formData) 
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
      <Text className="text-blue-400 text-xl text-center font-bold">Baptism Form</Text>
      <View className="mt-5">
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Child Details:</Text>
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Complete Name of the Child:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='NameOfChild'
          />
          {errors.NameOfChild && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
            maxLength: 2,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Age of Child:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='number-pad'
            />
          )}
          name='AgeOfChild'
          />
          {errors.AgeOfChild && <Text className="text-center text-red-400">This is required and will only accept 2 digits.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Birthdate of Child:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='BirthdateOfChild'
          />
          {errors.BirthdateOfChild && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Birthplace of Child:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='BirthplaceOfChild'
          />
          {errors.BirthplaceOfChild && <Text className="text-center text-red-400">This is required.</Text>}
        </View>
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Parents Details:</Text>
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Name of Father:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='NameOfFather'
          />
          {errors.NameOfFather && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Name of Mother:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='NameOfMother'
          />
          {errors.NameOfMother && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Complete Address of the Parents:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='AddressOfParents'
          />
          {errors.AddressOfParents && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
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
          name='ContactNumberOfParents'
          />
          {errors.ContactNumberOfParents && <Text className="text-center text-red-400">This is required.</Text>}
        </View>
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Other Details:</Text>
          <Controller 
          control={control}
          rules={{
            required: true,
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
          {errors.NumberOfParticipants && <Text className="text-center text-red-400">This is required.</Text>}
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
        <SubmitButton handle={handleSubmit} submit={onSubmit} />
      </View>
    </View>
  )
}

export default baptism