import {ScrollView, StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Text,
  Card,
  Button,
  Header as HeaderRNE,
  HeaderProps,
  Icon,
} from '@rneui/themed';
import React, {FC} from 'react';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen: FC = () => {
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
              <TouchableOpacity>
                <Ionicons
                  name="notifications-outline"
                  color={'#fa8444'}
                  size={24}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: 10}}>
                <Ionicons name="log-out-outline" color={'#fa8444'} size={24} />
              </TouchableOpacity>
            </View>
          }
          // centerComponent={{text: 'Header', style: styles.heading}}
        />
      </SafeAreaProvider>

      <Card containerStyle={styles.cardContainer}>
        <Card.Title>Saldo Rekening Utama</Card.Title>
        <View style={styles.viewContainer}>
          <Text style={styles.textCenter}>Rp. 00000000</Text>
          <Ionicons name="eye-outline" color={'#fa8444'} size={24} />
          <Ionicons name="eye-off-outline" color={'#fa8444'} size={24} />
        </View>
        <Button
          buttonStyle={styles.btnStyle}
          titleStyle={styles.btnTitleStyle}
          containerStyle={styles.btnContainerStyle}
          title="Rekening Lain"
          type="outline"
          size="sm"
        />
      </Card>

      <View style={styles.menuContainer}>
        <View style={styles.menuCardContainer}>
          <Card containerStyle={styles.menuCard}>
            <Ionicons
              name="swap-horizontal-outline"
              color={'#fa8444'}
              size={24}
            />
          </Card>
          <Text>Transfer</Text>
        </View>

        <View style={styles.menuCardContainer}>
          <Card containerStyle={styles.menuCard}>
            <Ionicons name="wallet-outline" color={'#fa8444'} size={24} />
          </Card>
          <Text>E-Wallet</Text>
        </View>

        <View style={styles.menuCardContainer}>
          <Card containerStyle={styles.menuCard}>
            <Ionicons name="receipt-outline" color={'#fa8444'} size={24} />
          </Card>
          <Text>Pembayaran</Text>
        </View>

        <View style={styles.menuCardContainer}>
          <Card containerStyle={styles.menuCard}>
            <Ionicons name="grid-outline" color={'#fa8444'} size={24} />
          </Card>
          <Text>More</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  headerbg: {
    backgroundColor: 'red',
  },
  iconColor: {
    color: '#fa8444',
  },
  cardContainer: {
    alignItems: 'center',
    borderRadius: 25,
  },
  btnStyle: {
    borderRadius: 8,
    borderColor: '#fa8444',
    borderWidth: 1,
  },
  btnTitleStyle: {
    color: '#fa8444',
  },
  btnContainerStyle: {
    marginVertical: 10,
  },
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  menuContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuCard: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  menuCardContainer: {
    alignItems: 'center',
  },
});
