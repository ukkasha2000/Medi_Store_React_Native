import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    navigation.navigate('Products');
  };
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
        style={styles.footer}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.footerText}>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
