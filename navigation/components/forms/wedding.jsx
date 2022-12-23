import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

import SubmitButton from '../submitButton'

const wedding = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      GroomName: '',
      BrideName: '',
      GroomAge: '',
      BrideAge: '',
      BrideAddress: '',
      GroomAddress: '',
      BrideMother: '',
      BrideFather: '',
      GroomFather: '',
      GroomMother: '',
      AddressBrideParents: '',
      AddressGroomParents: '',
      FirstReading: '',
      SecondReading: '',
      ResponsorialPsalm: '',
      RingBearer: '',
      MoneyBearer: '',
      BibleBearer: '',
      ContactNumber: '',
      DaySchedule: '',
      TimeSchedule: '',
    }
  })

  const onSubmit = (formData) => {
    //on submit to firebase here
    console.log(formData)
    //console.log('hello wedding')
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
          name='GroomName'
          />
          {errors.GroomName && <Text className="text-center text-red-400">This is required.</Text>}
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
          name='BrideName'
          />
          {errors.BrideName && <Text className="text-center text-red-400">This is required.</Text>}
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
          name='GroomAge'
          />
          {errors.GroomAge && <Text className="text-center text-red-400">This is required and will accept 2 digits only.</Text>}
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
          name='BrideAge'
          />
          {errors.BrideAge && <Text className="text-center text-red-400">This is required and will accept 2 digits only.</Text>}
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
          name='BrideAddress'
          />
          {errors.BrideAddress && <Text className="text-center text-red-400">This is required.</Text>}
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
          name='GroomAddress'
          />
          {errors.GroomAddress && <Text className="text-center text-red-400">This is required.</Text>}
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
          name='BrideMother'
          />
          {errors.BrideMother && <Text className="text-center text-red-400">This is required.</Text>}
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
          name='BrideFather'
          />
          {errors.BrideFather && <Text className="text-center text-red-400">This is required.</Text>}
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
          name='GroomFather'
          />
          {errors.GroomFather && <Text className="text-center text-red-400">This is required.</Text>}
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
          name='GroomMother'
          />
          {errors.GroomMother && <Text className="text-center text-red-400">This is required.</Text>}
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
          name='AddressBrideParents'
          />
          {errors.AddressBrideParents && <Text className="text-center text-red-400">This is required.</Text>}
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
          name='AddressGroomParents'
          />
          {errors.AddressGroomParents && <Text className="text-center text-red-400">This is required.</Text>}
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

export default wedding
