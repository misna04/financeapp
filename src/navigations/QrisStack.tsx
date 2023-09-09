import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PermissionsPage} from 'screens/qris/PermissionPage';
// import {MediaPage} from './MediaPage';
import {CameraPage} from 'screens/qris/CameraScreen';
import {Camera, CameraPermissionStatus} from 'react-native-vision-camera';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export type Routes = {
  PermissionsPage: undefined;
  CameraPage: undefined;
  MediaPage: {
    path: string;
    type: 'video' | 'photo';
  };
};

const Stack = createNativeStackNavigator<Routes>();

export function QrisStack(): React.ReactElement | null {
  const [cameraPermission, setCameraPermission] =
    useState<CameraPermissionStatus>();
  const [microphonePermission, setMicrophonePermission] =
    useState<CameraPermissionStatus>();

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(setCameraPermission);
    Camera.getMicrophonePermissionStatus().then(setMicrophonePermission);
  }, []);

  console.log(
    `Re-rendering Navigator. Camera: ${cameraPermission} | Microphone: ${microphonePermission}`,
  );

  if (cameraPermission == null || microphonePermission == null) {
    // still loading
    return null;
  }

  const showPermissionsPage =
    cameraPermission !== 'granted' || microphonePermission === 'not-determined';
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarStyle: 'dark',
          animationTypeForReplace: 'push',
        }}
        initialRouteName={
          showPermissionsPage ? 'PermissionsPage' : 'CameraPage'
        }>
        <Stack.Screen name="PermissionsPage" component={PermissionsPage} />
        <Stack.Screen name="CameraPage" component={CameraPage} />
        {/* <Stack.Screen
          name="MediaPage"
          component={MediaPage}
          options={{
            animation: 'none',
            presentation: 'transparentModal',
          }}
        /> */}
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}

export default QrisStack;
