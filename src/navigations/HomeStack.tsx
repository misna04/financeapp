import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from 'screens/home/HomeScreen';
import PromoScreen from 'screens/promos/PromoScreen';
import PromoDetailScreen from 'screens/promos/DetailScreen';

const Stack = createNativeStackNavigator();

const HomeStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Promo" component={PromoScreen} />
      <Stack.Screen name="PromoDetail" component={PromoDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
