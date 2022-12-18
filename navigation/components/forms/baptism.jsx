import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  completeNameOfChild: yup.string().required('Name is required!'),
  birthdateOfChild: yup.string(),
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

const baptism = () => {

  return (
    <View className="mt-10">
      <Text className="text-blue-400 text-xl text-center font-bold">Baptism Form</Text>
      <View>
        <Formik
          initialValues={{
            completeNameOfChild: '',
            birthdateOfChild: '',
            ageOfChild: '',
            birthplaceOfChild: '',
            nameOfFather: '',
            nameOfMother: '',
            contactNumOfParents: '',
            completeHomeAddress: '',
            numberOfParticipants: '',
            scheduleDay: '',
            scheduleTime: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // submit here to firebase 
          }}
        >
          {
            ({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View>
                <TextInput
                  label="Name of Child"
                  value={values.completeNameOfChild}
                  onChangeText={handleChange('completeNameOfChild')}
                  onBlur={handleBlur('completeNameOfChild')}
                  error={errors.completeNameOfChild}
                />
                <TextInput
                  label="Age of Child"
                  //secureTextEntry={true}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={errors.password}
                />
                <Button title="Submit" onPress={handleSubmit} />
              </View>
            )
          }
        </Formik>
      </View>
    </View>
  )
}

export default baptism