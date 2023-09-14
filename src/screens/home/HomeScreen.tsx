import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, Card, Button, Header as HeaderRNE, Avatar} from '@rneui/themed';
import React, {FC, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

const HomeScreen: FC = ({navigation}: any) => {
  const [active, setActive] = useState<boolean>(true);

  const onClickPromos = () => {
    navigation.navigate('PromoDetail');
  };
  return (
    <>
      <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
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
                  <Ionicons
                    name="log-out-outline"
                    color={'#fa8444'}
                    size={24}
                  />
                </TouchableOpacity>
              </View>
            }
            // centerComponent={{text: 'Header', style: styles.heading}}
          />
        </SafeAreaProvider>

        <View style={styles.sectionContainer}>
          {/* card balance */}
          <Card containerStyle={styles.cardContainer}>
            <Card.Title>Your Balance</Card.Title>
            <View style={styles.viewContainer}>
              <Text style={styles.textCenter}>Rp. 00000000</Text>
              {active ? (
                <Ionicons name="eye-off-outline" color={'#fa8444'} size={24} />
              ) : (
                <Ionicons name="eye-outline" color={'#fa8444'} size={24} />
              )}
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

          {/* list menu */}
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
              <Text>Payment</Text>
            </View>

            <View style={styles.menuCardContainer}>
              <Card containerStyle={styles.menuCard}>
                <Ionicons name="grid-outline" color={'#fa8444'} size={24} />
              </Card>
              <Text>More</Text>
            </View>
          </View>

          {/* list promos */}
          <View style={styles.childContainerStyle}>
            <View style={styles.flexHeader}>
              <Text h4>Promos & Information</Text>
              <Ionicons
                name="arrow-forward-outline"
                size={24}
                color={'#fa8444'}
              />
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {datas &&
                datas?.map((item, index) => (
                  <TouchableWithoutFeedback onPress={onClickPromos}>
                    <Card
                      containerStyle={styles.containerCardPromo}
                      key={index}>
                      <View style={styles.headflex}>
                        <Text style={styles.txtHead}>Meta Stone</Text>
                        <Text style={styles.txtHead}>36</Text>
                      </View>
                      <View style={styles.headflex}>
                        <Text style={styles.txtContent}>1 x 23.5 VAT</Text>
                        <Text style={styles.txtContent}>2.51</Text>
                      </View>
                    </Card>
                  </TouchableWithoutFeedback>
                ))}
            </ScrollView>
          </View>

          {/* send again / Favorite lists */}
          <View style={styles.childContainerStyle}>
            <View style={styles.flexHeader}>
              <Text h4>Send Again</Text>
              <Ionicons
                name="ellipsis-horizontal-outline"
                size={24}
                color={'#fa8444'}
              />
            </View>

            <View style={styles.avatarSection}>
              <Avatar
                size={64}
                title="DN"
                containerStyle={styles.avatarContainer}
                titleStyle={styles.avatarTitle}
              />
              <Avatar
                size={64}
                title="SM"
                containerStyle={styles.avatarContainer}
                titleStyle={styles.avatarTitle}
              />
              <Avatar
                size={64}
                title="BB"
                containerStyle={styles.avatarContainer}
                titleStyle={styles.avatarTitle}
              />
              <Avatar
                size={64}
                title="JH"
                containerStyle={styles.avatarContainer}
                titleStyle={styles.avatarTitle}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  sectionContainer: {
    marginHorizontal: 25,
    justifyContent: 'center',
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
    marginVertical: 5,
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
    backgroundColor: '#fed0b7',
  },
  menuCardContainer: {
    alignItems: 'center',
  },
  childContainerStyle: {
    marginTop: 10,
    justifyContent: 'center',
  },
  containerCardPromo: {
    borderRadius: 25,
    width: screenWidth / 1.5,
  },
  headflex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  txtHead: {
    fontWeight: 'bold',
  },
  txtContent: {
    fontWeight: '500',
  },
  // flexContainer: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   // flexDirection: 'row',
  // },
  flexHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    backgroundColor: '#fed0b7',
    borderRadius: 8,
  },
  avatarSection: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  avatarTitle: {
    color: '#fa8444',
  },
});

const datas = [
  {
    name: 'Meta Stone',
    expired: false,
  },
  {
    name: 'Meta Stone',
    expired: false,
  },
  {
    name: 'Meta Stone',
    expired: false,
  },
  {
    name: 'Meta Stone',
    expired: false,
  },
];
