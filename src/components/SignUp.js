import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
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
  const googleLogIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      // .then(() => {
      //   navigation.navigate('Products');
      // });
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      navigation.navigate('Products');
      // this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  const fbLoginIn = async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    } else {
      navigation.navigate('Products');
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };

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
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={googleLogIn}>
          <View style={styles.buttonContainer}>
            <Image
              source={{
                uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
              }}
              style={styles.buttonImage}
            />
            <View style={styles.buttonTextContainer}>
              <Text style={styles.iconButtonText}>Google</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={fbLoginIn}>
          <View style={styles.buttonContainer}>
            <Image
              source={{
                uri: 'https://icon-library.com/images/facebook-png-icon/facebook-png-icon-12.jpg',
              }}
              style={styles.buttonImage}
            />
            <View style={styles.buttonTextContainer}>
              <Text style={styles.iconButtonText}>Facebook</Text>
            </View>
          </View>
        </TouchableOpacity>
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
