import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HistoryScreen from 'screens/history/HistoryScreen';

const Stack = createNativeStackNavigator();

const HistoryStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="History"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="History" component={HistoryScreen} />
    </Stack.Navigator>
  );
};

export default HistoryStack;
