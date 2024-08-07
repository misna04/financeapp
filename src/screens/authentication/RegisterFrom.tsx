import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Text} from '@rneui/themed';

function RegisterForm(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <Text>Form Login</Text>
    </ScrollView>
  );
}

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
