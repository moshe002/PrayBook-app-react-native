import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import SubmitButton from '../submitButton'

const ftd = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      DeceasedName: '',
      CauseOfDeath: '',
      AgeOfDeceased: '',
      AddressOfDeceased: '',
      LocationBury: '',
      NumberOfParticipants: '',
      ContactNumber: '',
      DaySchedule: '',
      TimeSchedule: '',
    }
  })

  const onSubmit = (formData) => {
    //on submit to firebase here
    console.log(formData)
    //console.log('hello ftd')
  }

  return (
    <View className="mt-10">
      <Text className="text-blue-400 text-xl text-center font-bold">Mass for the Dead Form</Text>
      <View className="mt-5">
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Details of the Deceased:</Text>
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Name of the Deceased:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='DeceasedName'
          />
          {errors.DeceasedName && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Cause of Death:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='CauseOfDeath'
          />
          {errors.CauseOfDeath && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
            maxLength: 3,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Age of the Deceased:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='number-pad'
            />
          )}
          name='AgeOfDeceased'
          />
          {errors.AgeOfDeceased && <Text className="text-center text-red-400">This is required and will accept 3 digits only.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Home Address of the Deceased:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='AddressOfDeceased'
          />
          {errors.AddressOfDeceased && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
          <Controller 
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              placeholder='Location on where to bury:'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType='default'
            />
          )}
          name='LocationBury'
          />
          {errors.LocationBury && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
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
          {errors.NumberOfParticipants && <Text className="text-center text-red-400">This is required and will only accept 4 digits.</Text>}
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
          {errors.ContactNumber && <Text className="text-center text-red-400">This is required and will only accept 11 digits.</Text>}
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
          name='DaySchedule'
          />
          {errors.DaySchedule && <Text className="text-center text-red-400">This is required.</Text>}
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
          name='TimeSchedule'
          />
          {errors.TimeSchedule && <Text className="text-center text-red-400">This is required.</Text>}
          {/*--------------------------------------------------------------*/}
        </View>
        <SubmitButton handle={handleSubmit} submit={onSubmit}/>
      </View>
    </View>
  )
}

export default ftd