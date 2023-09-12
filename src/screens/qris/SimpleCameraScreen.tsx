import {
  ScrollView,
  StyleSheet,
  View,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {Text, Card, Button, Icon} from '@rneui/themed';
import React, {FC, useCallback, useState, useEffect, useMemo} from 'react';
import {
  Camera,
  CameraPermissionStatus,
  useFrameProcessor,
  useCameraDevices,
} from 'react-native-vision-camera';

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

  useEffect(() => {
    requestCameraPermission();
    requestMicrophonePermission();
  }, [cameraPermissionStatus, microphonePermissionStatus]);

  console.log('cameraPermissionStatus', cameraPermissionStatus);

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    // const isHotdog = detectIsHotdog(frame);
    // console.log(isHotdog ? 'Hotdog!' : 'Not Hotdog.');
  }, []);

  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  const format = useMemo(() => {
    return device?.formats.reduce((prev, curr) => {
      if (prev == null) return curr;
      if (curr.maxFps > prev.maxFps) return curr;
      else return prev;
    }, undefined);
  }, [device?.formats]);

  if (device == null) return <ActivityIndicator size="large" />;

  return (
    <Camera
      // style={styles.camera}
      device={device}
      frameProcessor={frameProcessor}
      isActive={true}
      format={format}
    />
  );
};

export default SimpleCameraScreen;

const styles = StyleSheet.create({});
