import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

export const HomeNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={'Home'} component={HomeScreen}/>
  </Stack.Navigator>
);