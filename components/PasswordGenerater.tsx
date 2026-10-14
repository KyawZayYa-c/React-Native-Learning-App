import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Minimum length is 4')
    .max(16, 'Maximum length is 16')
    .required('Length is required'),
});

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) characterList += uppercaseChars;
    if (lowerCase) characterList += lowerCaseChars;
    if (numbers) characterList += digitChars;
    if (symbols) characterList += specialChars;

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Password Generator</Text>
      <Formik
        initialValues={{ passwordLength: '' }}
        validationSchema={PasswordSchema}
        onSubmit={values => {
          generatePasswordString(Number(values.passwordLength));
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          handleChange,
          handleSubmit,
          handleReset,
        }) => (
          <>
            <View style={styles.inputWrapper}>
              <View style={styles.inputColumn}>
                <Text style={styles.heading}>Password Length</Text>
                <TextInput
                  style={styles.inputStyle}
                  value={values.passwordLength}
                  onChangeText={handleChange('passwordLength')}
                  placeholder='Ex. 8'
                  placeholderTextColor='#888'
                  keyboardType='numeric'
                />
              </View>
              {touched.passwordLength && errors.passwordLength && (
                <Text style={styles.errorText}>{errors.passwordLength}</Text>
              )}
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Lowercase</Text>
            <BouncyCheckbox
                style={{marginLeft:40, paddingLeft: 80}}
                disableBuiltInState
                isChecked={lowerCase}
                onPress={() => setLowerCase(!lowerCase)}
                fillColor='#29ab87'
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Uppercase</Text>
            <BouncyCheckbox
                style={{marginLeft:40, paddingLeft: 80}}
                disableBuiltInState
                isChecked={upperCase}
                onPress={() => setUpperCase(!upperCase)}
                fillColor='#d60be5'
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Numbers</Text>
            <BouncyCheckbox
                style={{marginLeft:40, paddingLeft: 90}}
                disableBuiltInState
                isChecked={numbers}
                onPress={() => setNumbers(!numbers)}
                fillColor='#FC80A5'
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.heading}>Include Symbols</Text>
            <BouncyCheckbox
                style={{marginLeft:40, paddingLeft: 90}}
                disableBuiltInState
                isChecked={symbols}
                onPress={() => setSymbols(!symbols)}
                fillColor='#1a69be'
              />
            </View>

            <View style={styles.formActions}>
              <TouchableOpacity
                disabled={!isValid}
                style={[styles.btn, styles.primaryBtn, !isValid && { opacity: 0.5 }]}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.btnText}>Generate</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.btn, styles.secondaryBtn]}
                onPress={() => {
                  handleReset();
                  resetPasswordState();
                }}
              >
                <Text style={styles.btnText}>Reset</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>

      {isPassGenerated ? (
        <View style={styles.card}>
          <Text style={styles.subTitle}>Generated Password:</Text>
          <Text style={styles.description}>Long Press to copy</Text>
          <Text selectable={true} style={styles.generatedPassword}>
            {password}
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    margin: 10,
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
    inputWrapper: {
    flexDirection: 'row',
    justifyContent : 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#0C3B5E',
    padding: 12,
    borderRadius: 8,
  },
  inputColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical : 10
  },
  errorText: {
    color: '#ff8080',
    fontSize: 12,
    marginTop: 4,
  },
  inputStyle: {
    color: '#FFFFFF',
    width: 60,
    height: 40,
    borderColor: '#bbe7f0',
    borderWidth: 1,
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 16,
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 15,
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryBtn: {
    backgroundColor: '#29ab87',
  },
  secondaryBtn: {
    backgroundColor: '#e41010',
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    marginTop: 25,
    backgroundColor: '#0C3B5E',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#29ab87',
  },
  subTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  description: {
    color: '#8ab4f8',
    fontSize: 12,
    marginVertical: 5,
  },
  generatedPassword: {
    fontSize: 22,
    color: '#29ab87',
    fontWeight: 'bold',
    marginTop: 10,
    letterSpacing: 1,
  },
});