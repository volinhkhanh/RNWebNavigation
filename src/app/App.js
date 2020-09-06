import React from 'react'
import {
  Platform,
} from 'react-native';
import Layout from '../wrapper'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigator } from '../navigation/AppNavigator';

const renderLayout = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export const App = () => {
  return (
    Platform.OS === 'web' ?
    <Layout>
      {renderLayout()}
    </Layout>
    : 
    <>
      {renderLayout()}
    </>
  );
}

export default App 