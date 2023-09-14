import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
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
import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FavoriteScreen: FC = () => {
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <SafeAreaProvider>
        <HeaderRNE
          backgroundColor="white"
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
        <Text h4>Current</Text>
        <Ionicons name="search-outline" size={24} color={'#fa8444'} />
      </View>

      {/* data section */}
      <View style={styles.sectionContainer}>
        {datas &&
          datas?.map((item, index) => (
            <ListItem containerStyle={styles.listContainer}>
              <View style={styles.boxStyle}>
                <Ionicons name="arrow-up-outline" size={24} color={'white'} />
              </View>
              <ListItem.Content>
                <ListItem.Title>John Doe</ListItem.Title>
                <ListItem.Subtitle>0000000000000</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))}
      </View>
    </ScrollView>
  );
};

export default FavoriteScreen;

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
  filterSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
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
});

const datas = [
  {
    name: 'John Doe',
    norek: '000000000',
  },
  {
    name: 'John Doe',
    norek: '000000000',
  },
  {
    name: 'John Doe',
    norek: '000000000',
  },
];
