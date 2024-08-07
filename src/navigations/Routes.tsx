import React, {FC, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoggedInStack from './LoggedInStack'
import NotLoggedInStack from './NotLoggedInStack'

const Stack = createNativeStackNavigator();

const Routes: FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const getUserToken = async () => {
    // testing purposes
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      // custom logic
      await sleep(2000);
      const token = null;
      setUserToken(token);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getUserToken();
  }, []);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }
  return (
      <Stack.Navigator>
        {userToken == null ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="SignIn"
            component={NotLoggedInStack}
            options={{
              title: 'Sign in',
            }}
            initialParams={{ setUserToken }}
          />
        ) : (
          // User is signed in
          <Stack.Screen name="Home" component={LoggedInStack} />
        )}
      </Stack.Navigator>
  );
};

export default Routes;
