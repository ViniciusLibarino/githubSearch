import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import UserRepositories from '../screens/UserRepositories';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function Stacks() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UserRepositories" component={UserRepositories} />
    </Stack.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="StackNavigation"
        tabBarOptions={{
          activeTintColor: '#040404',
          inactiveTintColor: '#d6d6d6',
          showLabel: false,
          tabStyle: {
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <Tab.Screen
          name="StackNavigation"
          component={Stacks}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="heart" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
