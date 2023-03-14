/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignIn,
  SignUp,
  Products,
  ProductDetailPage,
  Cart,
} from './src/components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';

const App = () => {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    setTimeout(async () => {
      SplashScreen.hide();
    }, 3000);
    GoogleSignin.configure({
      webClientId:
        '328928413037-eni5qtu9umm3u5q42ojt4kiu2u0r7665.apps.googleusercontent.com',
    });
  }, []);
  // const onPressSignOut = () => {
  //   auth()
  //     .signOut()
  //     .then(() => {
  //       console.log('User signed out!');
  //       nav.navigate('Signin');
  //     });
  // };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signin">
          <Stack.Screen
            name="Signin"
            component={SignIn}
            options={{headerBackTitleVisible: false}}
          />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen
            name="Products"
            component={Products}
            options={({navigation}) => ({
              headerTitleStyle: {
                color: 'purple',
              },
              headerTitleAlign: 'center',
              headerLeft: () => '',
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('CartPage')}>
                  <AntDesign name="shoppingcart" size={30} color="purple" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Productdetailpage"
            component={ProductDetailPage}
            options={({navigation}) => ({
              headerTitleStyle: {
                color: 'purple',
              },
              headerTitleAlign: 'center',
              headerTitle: 'Product',
              headerRight: () => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CartPage')}>
                    <AntDesign name="shoppingcart" size={30} color="purple" />
                  </TouchableOpacity>
                );
              },
            })}
          />
          <Stack.Screen
            name="CartPage"
            component={Cart}
            options={({navigation}) => ({
              headerTitleStyle: {
                color: 'purple',
              },
              headerTitleAlign: 'center',
              headerTitle: 'Cart',
              headerRight: () => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      auth()
                        .signOut()
                        .then(() => {
                          console.log('User signed out!');
                          navigation.navigate('Signin');
                        });
                    }}>
                    <AntDesign name="logout" size={30} color="purple" />
                  </TouchableOpacity>
                );
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
