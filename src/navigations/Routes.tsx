import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';

import HomeStackScreen from './HomeStack';
import HistoryStackScreen from './HistoryStack';
// import QrisStackScreen from './QrisStack';
import FavoriteStackScreen from './FavoriteStack';
import SettingStackScreen from './SettingStack';
import SimpleCameraScreen from 'screens/qris/SimpleCameraScreen';

const Tab = createBottomTabNavigator();

const active = '#fa8444';
const inactive = '#c4c5c9';

const Routes: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          // else if (route.name === 'QRIS') {
          //   iconName = focused ? 'qr-code' : 'qr-code-outline';
          //   size = 40;
          // }
          else if (route.name === 'History') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'star' : 'star-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: active,
        tabBarInactiveTintColor: inactive,
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="History" component={HistoryStackScreen} />
      <Tab.Screen
        name="QRIS"
        component={SimpleCameraScreen}
        options={{
          tabBarActiveTintColor: active,
          tabBarInactiveTintColor: inactive,
          tabBarLabel: '',
          tabBarIcon: ({focused, color}) => (
            <View
              style={{
                position: 'absolute',
                bottom: 10, // space from bottombar
                height: 58,
                width: 58,
                borderRadius: 58,
                backgroundColor: focused ? active : inactive,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                name={focused ? 'qr-code' : 'qr-code-outline'}
                size={45}
                color={'white'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Favorite" component={FavoriteStackScreen} />
      <Tab.Screen name="Settings" component={SettingStackScreen} />
    </Tab.Navigator>
  );
};

export default Routes;
