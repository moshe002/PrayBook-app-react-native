import { View, Text, TextInput, TouchableOpacity, StyleSheet  } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const baptism = () => {

  const validationSchema = yup.object().shape({
    completeNameOfChild: yup.string().required('Name is required!'),
    birthdateOfChild: yup.string().required(),
    ageOfChild: yup.string(),
    birthplaceOfChild: yup.string(),
    nameOfFather: yup.string(),
    nameOfMother: yup.string(),
    contactNumOfParents: yup.string(),
    completeHomeAddress: yup.string(),
    numberOfParticipants: yup.string(),
    scheduleDay: yup.string(),
    scheduleTime: yup.string()
  })

  const { handleSubmit, register, errors } = useForm({
    validationSchema,
  })

  const onSubmit = (formData) => {
    //on submit to firebase here
    //console.log('hello world')
  }

  return (
    <View className="mt-10">
      <Text className="text-blue-400 text-xl text-center font-bold">Baptism Form</Text>
      <View className="mt-5">
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Child Details:</Text>
          <TextInput 
            placeholder='Complete Name of the Child: '
            {...register("completeNameOfChild")}
            keyboardType='default'
            name="completeNameOfChild"
          />
          <TextInput 
            placeholder='Age of Child: '
            {...register("ageOfChild")}
            keyboardType='number-pad'
          />
          <TextInput 
            placeholder='Birthdate of Child: '
            {...register("birthdateOfChild")}
            keyboardType='default'
          />
          <TextInput 
            placeholder='Birthplace of Child: '
            {...register("birthplaceOfChild")}
            keyboardType='default'
          />
        </View>
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Parents Details:</Text>
          <TextInput 
            placeholder='Complete Name of Father: '
            {...register("nameOfFather")}
            keyboardType='default'
          />
          <TextInput 
            placeholder='Complete Name of Mother: '
            {...register("nameOfMother")}
            keyboardType='default'
          />
          <TextInput 
            placeholder='Contact Number of the Parents: '
            {...register("contactNumOfParents")}
            keyboardType='number-pad'
          />
          <TextInput 
            placeholder='Complete Home Address of the Parents: '
            {...register("completeHomeAddress")}
            keyboardType='default'
          />
        </View>
        <View className="p-3">
          <Text className="text-black text-lg text-center font-semibold">Other Details:</Text>
          <TextInput 
            placeholder='Number of Participants: '
            {...register("numberOfParticipants")}
            keyboardType='number-pad'
          />
          <TextInput 
            placeholder='Schedule Day: '
            {...register("scheduleDay")}
            keyboardType='default'
          />
          <TextInput 
            placeholder='Schedule Time: '
            {...register("scheduleTime")}
            keyboardType='default'
          />
          <View className="flex justify-center items-center mt-5 mb-5">
            <TouchableOpacity className="p-3 w-1/2 rounded-xl bg-blue-400" onPress={handleSubmit(onSubmit)}>
              <Text className="text-center text-lg text-white font-semibold">Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  focused: {
    className: 'focus-bg-blue-500',
  },
});

export default baptism