import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainBottomNavigator } from './MainNavigator';
import { AppRoute } from './AppRoutes';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator initialRouteName='Main' headerMode='none'>
    <Stack.Screen name={AppRoute.MAIN} component={MainBottomNavigator}/>
  </Stack.Navigator>
);