import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {
  Text,
  Card,
  Button,
  Header as HeaderRNE,
  HeaderProps,
  Icon,
  Input,
} from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const SettingScreen: FC = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaProvider>
        <HeaderRNE
          backgroundColor="white"
          leftComponent={{
            icon: 'menu',
            color: '#fa8444',
          }}
          rightComponent={
            <View style={styles.headerRight}>
              <TouchableOpacity style={{marginLeft: 10}}>
                <Ionicons name="log-out-outline" color={'#fa8444'} size={24} />
              </TouchableOpacity>
            </View>
          }
          centerComponent={{text: 'Settings', style: styles.heading}}
        />
      </SafeAreaProvider>

      <View style={styles.sectionContainer}>
        <View>
          <Input
            placeholder="Search settings..."
            leftIcon={{type: 'ionicons', name: 'search'}}
          />
        </View>
        <View>
          <View>
            <View>
              <Text h4>Profile</Text>
            </View>
            <View style={styles.containerFlex}>
              <View style={styles.containerList}>
                <View style={styles.leftList}>
                  <Ionicons name="information-circle-outline" size={24} />
                  <Text>Personal Information</Text>
                </View>

                <Ionicons name="chevron-forward-outline" size={24} />
              </View>
              <View style={styles.containerList}>
                <View style={styles.leftList}>
                  <Ionicons name="chatbox-ellipses-outline" size={24} />
                  <Text>Message Center</Text>
                </View>

                <Ionicons name="chevron-forward-outline" size={24} />
              </View>
            </View>
          </View>

          <View>
            <View>
              <Text h4>Bank Account</Text>
            </View>
            <View style={styles.containerFlex}>
              <View style={styles.containerList}>
                <View style={styles.leftList}>
                  <Ionicons name="information-circle-outline" size={24} />
                  <Text>Security</Text>
                </View>

                <Ionicons name="chevron-forward-outline" size={24} />
              </View>
              <View style={styles.containerList}>
                <View style={styles.leftList}>
                  <Ionicons name="chatbox-ellipses-outline" size={24} />
                  <Text>Payment Preferences</Text>
                </View>

                <Ionicons name="chevron-forward-outline" size={24} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginHorizontal: 25,
  },
  containerList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  leftList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerFlex: {
    display: 'flex',
  },
});
