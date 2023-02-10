import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <View style={styles.mainContainerSignIn}>
      <Text style={styles.mainHeading}>Sign In</Text>
      <View style={styles.container}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>
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
        style={styles.footer}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.footerText}>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
