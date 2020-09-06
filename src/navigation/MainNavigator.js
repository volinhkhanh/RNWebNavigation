import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator } from './HomeNavigator';
import { ChatNavigator } from './ChatNavigator';
import { AppRoute } from './AppRoutes';
//
const BottomTab = createBottomTabNavigator();
//
export const MainBottomNavigator = () => (
  <BottomTab.Navigator
    tabBarOptions= {{
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center'
      }
    }}
  >
    <BottomTab.Screen
      name={AppRoute.HOME}
      component={HomeNavigator}
      options={{ title: 'HOME' }}
    />
    <BottomTab.Screen
      name={AppRoute.CHAT}
      component={ChatNavigator}
      options={({ route }) => ({
        tabBarVisible: getTabBarVisibility(route),
        title: 'CHAT'
      })}
    />
  </BottomTab.Navigator>
);
//
const getTabBarVisibility = (route) => {
  const routeName = route.state ? route.state.routes[route.state.index].name : '';
  if (routeName === 'Chat') {
    return false;
  }
  return true;
}