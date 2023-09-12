import {
  ScrollView,
  StyleSheet,
  View,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {Text, Card, Button, Icon} from '@rneui/themed';
import React, {
  FC,
  useCallback,
  useState,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {
  Camera,
  CameraPermissionStatus,
  useFrameProcessor,
  useCameraDevices,
  CameraDeviceFormat,
  sortFormats,
  CameraDevice,
  scanQRCodes,
} from 'react-native-vision-camera';
import {
  PinchGestureHandlerGestureEvent,
  PinchGestureHandler,
  TapGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Reanimated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useSharedValue,
} from 'react-native-reanimated';
import {useIsFocused} from '@react-navigation/core';
import {useIsForeground} from '../../hooks/useIsForeground';
import {CONTENT_SPACING, MAX_ZOOM_FACTOR, SAFE_AREA_PADDING} from './Constants';

// const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
// useAnimatedProps({
//   zoom: true,
// });

const SCALE_FULL_ZOOM = 3;
const BUTTON_SIZE = 40;

const ScanCameraScreen: FC = () => {
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>('not-determined');
  const [microphonePermissionStatus, setMicrophonePermissionStatus] =
    useState<CameraPermissionStatus>('not-determined');

  const camera = useRef<Camera>(null);
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
  const zoom = useSharedValue(0);
  const isPressingButton = useSharedValue(false);

  // check if camera page is active
  const isFocussed = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocussed && isForeground;

  const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>(
    'front',
  );
  const [enableHdr, setEnableHdr] = useState(false);
  const [flash, setFlash] = useState<'off' | 'on'>('off');
  const [enableNightMode, setEnableNightMode] = useState(false);

  // camera format settings
  const devices = useCameraDevices();
  const device = cameraPosition === 'front' ? devices.front : devices.back;

  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...');
    const permission = await Camera.requestCameraPermission();
    console.log(`Camera permission status: ${permission}`);

    if (permission === 'denied') await Linking.openSettings();
    setCameraPermissionStatus(permission);
  }, []);

  const onFlipCameraPressed = useCallback(() => {
    setCameraPosition(p => (p === 'back' ? 'front' : 'back'));
  }, []);

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    const qrCodes = scanQRCodes(frame);
    console.log(`QR Codes: ${qrCodes}`);
  }, []);

  if (device == null) return <ActivityIndicator />;

  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} />
    </View>
  );
};

export default ScanCameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
