import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import UserList from './screens/UsersList'
import CreateUserScreen from './screens/CreateUserScreen'
import UserDetailScreen from './screens/UserDetailScreen'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserList} options={{title: 'Users List'}}/>
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} options={{title: 'Creating a new user'}}/>
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} options={{title: 'User Detail'}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

