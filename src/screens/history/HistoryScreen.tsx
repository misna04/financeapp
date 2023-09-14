import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {
  Text,
  Card,
  Button,
  Header as HeaderRNE,
  HeaderProps,
  Icon,
  Avatar,
  ListItem,
} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HistoryScreen: FC = () => {
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <SafeAreaProvider>
        <HeaderRNE
          backgroundColor="white"
          // leftComponent={{
          //   icon: 'menu',
          //   color: '#fa8444',
          // }}
          rightComponent={
            <View style={styles.headerRight}>
              <TouchableOpacity>
                <Ionicons name="home-outline" color={'#fa8444'} size={24} />
              </TouchableOpacity>
            </View>
          }
          centerComponent={{text: 'History', style: styles.heading}}
        />
      </SafeAreaProvider>

      {/* filter section */}
      <View style={styles.filterSection}>
        <Text h4>Today</Text>
        <Ionicons name="search-outline" size={24} color={'#fa8444'} />
      </View>

      <View style={styles.sectionContainer}>
        {datas &&
          datas?.map((item, index) => (
            <ListItem containerStyle={styles.listContainer}>
              <View style={styles.boxStyle}>
                <Ionicons name="arrow-up-outline" size={24} color={'white'} />
              </View>
              <ListItem.Content>
                <ListItem.Title>John Doe</ListItem.Title>
                <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
              </ListItem.Content>
              <Text>+800</Text>
            </ListItem>
          ))}
      </View>
    </ScrollView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
  },
  heading: {
    color: '#fa8444',
    fontSize: 22,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginHorizontal: 10,
  },
  listContainer: {
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  boxStyle: {
    backgroundColor: '#fa8444',
    padding: 10,
    borderRadius: 8,
  },
  filterSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
  },
});

const datas = [
  {
    type: 'receive',
    sender: 'MS Hueco',
    amount: 800,
    datetime: 'Thu Sep 14 2023 00:16:40 GMT+0800 (Central Indonesia Time)',
  },
  {
    type: 'transfer',
    sender: 'MS Hueco',
    amount: 800,
    datetime: 'Thu Sep 14 2023 00:16:40 GMT+0800 (Central Indonesia Time)',
  },
];
