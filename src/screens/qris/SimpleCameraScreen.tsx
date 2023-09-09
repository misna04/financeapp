import {ScrollView, StyleSheet, View} from 'react-native';
import {Text, Card, Button, Icon} from '@rneui/themed';
import React, {FC, useCallback, useState} from 'react';
import {Camera, CameraPermissionStatus} from 'react-native-vision-camera';

const SimpleCameraScreen: FC = () => {
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>('not-determined');
  const [microphonePermissionStatus, setMicrophonePermissionStatus] =
    useState<CameraPermissionStatus>('not-determined');

  const requestMicrophonePermission = useCallback(async () => {
    console.log('Requesting microphone permission...');
    const permission = await Camera.requestMicrophonePermission();
    console.log(`Microphone permission status: ${permission}`);

    if (permission === 'denied') await Linking.openSettings();
    setMicrophonePermissionStatus(permission);
  }, []);

  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...');
    const permission = await Camera.requestCameraPermission();
    console.log(`Camera permission status: ${permission}`);

    if (permission === 'denied') await Linking.openSettings();
    setCameraPermissionStatus(permission);
  }, []);

  return <ScrollView></ScrollView>;
};

export default SimpleCameraScreen;

const styles = StyleSheet.create({});
