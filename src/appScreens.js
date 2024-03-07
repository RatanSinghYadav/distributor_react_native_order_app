import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/user/auth/login';
import Signup from './component/user/auth/signup';
import Home from './home';

const Stack = createNativeStackNavigator();

function AppScreens() {
    return (
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
       </Stack.Navigator>
    );
  }
  

export default AppScreens;