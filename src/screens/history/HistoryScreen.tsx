import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {FC} from 'react';

const HistoryScreen: FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>HistoryScreen</Text>
    </ScrollView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
