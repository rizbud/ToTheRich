import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '@Containers/HomeScreen';
import AddExpenseScreen from '@Containers/AddExpenseScreen';
import {apply} from '@Themes/OsmiProvider';
import {BackButton} from '@Components';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddExpenses"
          component={AddExpenseScreen}
          options={{
            headerStyle: apply('shadow-none'),
            title: 'Tambah Pengeluaran Baru',
            headerTitleStyle: apply('font-bold text-lg'),
            headerTitleAlign: 'center',
            headerLeft: () => <BackButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
