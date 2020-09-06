import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ChatScreen } from '../screens/chat/ChatScreen';
import { GroupChatScreen } from '../screens/chat/GroupChatScreen';

const Stack = createStackNavigator();

export const ChatNavigator = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen name={'Group Chat'} component={GroupChatScreen}/>
    <Stack.Screen name={'Chat'} component={ChatScreen}/>
  </Stack.Navigator>
)}