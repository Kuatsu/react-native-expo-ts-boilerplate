import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import I18n from 'i18n-js';
import HomeScreen from '../screens/Home';
import { StackNavigatorParamList } from '../types/global';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

const StackNavigator = () => (
  <NavigationContainer>
    {/* @ts-ignore - definitions for this go out of sync often */}
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: I18n.t('screens.home.title'),
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;
