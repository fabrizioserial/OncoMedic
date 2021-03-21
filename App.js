/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack' ;
import {Splash} from './component/Splash/Splash.js'
import {Login} from './component/Login/Login.js'
import Register from './component/Register/Register.js'
import {RegisterMedic} from './component/Register/RegisterMedic.js'
import {RegisterIllustrator} from './component/Register/RegisterIllustrator.js'
import {Register_Swiper} from './component/Register/Register_Swiper.js'
import {Home} from './component/Home/Home.js'
import {DailyRegister} from './component/DailyRegister/DailyRegister.js'
import store from './reduxStore/store';
import {Provider} from 'react-redux'

const Stack = createStackNavigator()

const App: () => Node = () => {

  console.log(store.getState())

  return (
    <NavigationContainer>
      <Provider store={store}>
        
        <Stack.Navigator>
          <Stack.Screen  name="Splash_Screen" component={Splash} options={{header: ()=> null}}/>
          <Stack.Screen  name="login" component={Login} options={{header: ()=> null}}/>
          <Stack.Screen  name="register" component={Register} options={{header: ()=> null}}/>
          <Stack.Screen  name="register_medic" component={RegisterMedic} options={{header: ()=> null}}/>
          <Stack.Screen  name="register_ilustrator1" component={RegisterIllustrator} options={{header: ()=> null}}/>
          <Stack.Screen  name="register_viewer" component={Register_Swiper} options={{header: ()=> null}}/>
          <Stack.Screen  name="home" component={Home} options={{header: ()=> null}}/>
          <Stack.Screen  name="registro_diario" component={DailyRegister} options={{header: ()=> null}}/>

          
        </Stack.Navigator>
      </Provider>

    </NavigationContainer>
  );
};


export default App;
