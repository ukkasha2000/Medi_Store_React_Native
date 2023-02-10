import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const inputFields = [
    {
      label: 'Full Name',
      placeholder: 'Enter Name',
      onChangeText: setFullName,
      value: fullName,
    },
    {
      label: 'Email',
      placeholder: 'Enter Email',
      onChangeText: setEmail,
      value: email,
    },
    {
      label: 'Password',
      placeholder: 'Enter Password',
      onChangeText: setPassword,
      value: password,
    },
    {
      label: 'Confirm Password',
      placeholder: 'Enter Password Again',
      onChangeText: setConfirmPassword,
      value: confirmPassword,
    },
  ];
  const iconButtonData = [
    {
      url: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
      name: 'Google',
    },
    {
      url: 'https://icon-library.com/images/facebook-png-icon/facebook-png-icon-12.jpg',
      name: 'Facebook',
    },
  ];

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
  };
  return (
    <View style={styles.mainContainerSignUp}>
      <Text style={styles.mainHeading}>Sign Up</Text>
      {inputFields.map(item => (
        <View style={styles.container} key={item.label}>
          <Text style={styles.inputLabel}>{item.label}</Text>
          <TextInput
            style={styles.inputBox}
            placeholder={item.placeholder}
            onChangeText={item.onChangeText}
            value={item.value}
          />
        </View>
      ))}

      <TouchableOpacity onPress={handleLogin} style={styles.signInButton}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.subContainer}>
        {iconButtonData.map(({url, name}) => (
          <TouchableOpacity style={styles.iconButton} key={url}>
            <View style={styles.buttonContainer}>
              <Image
                source={{
                  uri: url,
                }}
                style={styles.buttonImage}
              />
              <View style={styles.buttonTextContainer}>
                <Text style={styles.iconButtonText}>{name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.signUpFooter}
        onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.footerText}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
