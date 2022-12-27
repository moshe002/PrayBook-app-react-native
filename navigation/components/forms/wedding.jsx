import { View, Text, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { db } from '../../firebase/firebase-config'
import { collection, addDoc } from 'firebase/firestore'

import SubmitButton from '../submitButton'

const wedding = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      NameOfGroom: '',
      NameOfBride: '',
      AgeOfGroom: '',
      AgeOfBride: '',
      AddressOfBride: '',
      AddressOfGroom: '',
      MotherOfBride: '',
      FatherOfBride: '',
      FatherOfGroom: '',
      MotherOfGroom: '',
      AddressOfBrideParents: '',
      AddressOfGroomParents: '',
      FirstReading: '',
      SecondReading: '',
      ResponsorialPsalm: '',
      RingBearer: '',
      MoneyBearer: '',
      BibleBearer: '',
      FlowerGirls: '',
      BrideGroomPhoneNumber: '',
      ScheduleDay: '',
      ScheduleTime: '',
    }
  })

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
      const docRef = await addDoc(collection(db, "wedding"), formData) 
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
      <Text className="text-blue-400 text-xl text-center font-bold">Wedding Form</Text>
      <View className="mt-5">
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Details of the Newly Weds:</Text>
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Name of the Groom:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='NameOfGroom'
          />
          {errors.NameOfGroom && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Name of the Bride:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='NameOfBride'
          />
          {errors.NameOfBride && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
            maxLength: 2,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Age of Groom:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='number-pad'
            />
          )}
          name='AgeOfGroom'
          />
          {errors.AgeOfGroom && <Text className="text-center text-red-400">This is required and will accept 2 digits only.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
            maxLength: 2,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Age of Bride:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='number-pad'
            />
          )}
          name='AgeOfBride'
          />
          {errors.AgeOfBride && <Text className="text-center text-red-400">This is required and will accept 2 digits only.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Address of the Bride:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='AddressOfBride'
          />
          {errors.AddressOfBride && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Address of the Groom:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='AddressOfGroom'
          />
          {errors.AddressOfGroom && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
        </View>
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Parent's name of the Bride and Groom:</Text>
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Mother of Bride:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='MotherOfBride'
          />
          {errors.MotherOfBride && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Father of Bride:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='FatherOfBride'
          />
          {errors.FatherOfBride && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Father of Groom:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='FatherOfGroom'
          />
          {errors.FatherOfGroom && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Mother of Groom:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='MotherOfGroom'
          />
          {errors.MotherOfGroom && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Address of Mother and Father of Bride:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='AddressOfBrideParents'
          />
          {errors.AddressOfBrideParents && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Address of Mother and Father of Groom:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='AddressOfGroomParents'
          />
          {errors.AddressOfGroomParents && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
        </View>
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Readers and Bearers:</Text>
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='First Reading:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='FirstReading'
          />
          {errors.FirstReading && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Second Reading:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='SecondReading'
          />
          {errors.SecondReading && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Responsorial Psalm:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='ResponsorialPsalm'
          />
          {errors.ResponsorialPsalm && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Ring Bearer:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='RingBearer'
          />
          {errors.RingBearer && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Money Bearer:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='MoneyBearer'
          />
          {errors.MoneyBearer && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Bible Bearer:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='BibleBearer'
          />
          {errors.BibleBearer && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
            maxLength: 2,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Number of Flower Girls:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='number-pad'
            />
          )}
          name='FlowerGirls'
          />
          {errors.FlowerGirls && <Text className="text-center text-red-400">This is required and will accept 2 digits only.</Text>}
          {/*--------------------------------------------------------------*/}
        </View>
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Details on the event:</Text>
            <Controller 
            control={control}
            rules={{
              required: true,
              maxLength: 11,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput 
                placeholder='Contact Number of Bride and Groom:'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType='number-pad'
              />
            )}
            name='BrideGroomPhoneNumber'
            />
            {errors.BrideGroomPhoneNumber && <Text className="text-center text-red-400">This is required and will accept 11 digits only.</Text>}
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
            {/*--------------------------------------------------------------*/}
        </View>
        { isLoading && <ActivityIndicator size="large" /> }
        { isConnected && <Text className="text-center">Form not submitted. Please check your connection and try again.</Text> }
        <SubmitButton handle={handleSubmit} submit={onSubmit}/>
      </View>
    </View>
  )
}

export default wedding
