import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FavoriteScreen from 'screens/favorite/FavoriteScreen';

const Stack = createNativeStackNavigator();

const FavoriteStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName="Favorite">
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
    </Stack.Navigator>
  );
};

export default FavoriteStack;
