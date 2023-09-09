import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SettingScreen from 'screens/settings/SettingScreen';

const Stack = createNativeStackNavigator();

const SettingStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
