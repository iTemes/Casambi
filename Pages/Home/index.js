import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import FooterTooltips from '../../components/FooterTooltips';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.linksContainer}>
        <View style={styles.title}>
          <Image style={styles.logo} source={require('./images/csv.png')} />
        </View>
        <TouchableOpacity>
          <View style={styles.linkWrapper}>
            <Text style={styles.link}>Мои сети</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.linkWrapper}>
            <Text style={styles.link}>Устройства поблизости</Text>
            <View style={styles.linkBage}>
              <Text style={styles.linkBageText}>10</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
          <View style={styles.linkWrapper}>
            <Text style={styles.link}>Показать демо</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FooterTooltips />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    marginBottom: 60,
  },
  linksContainer: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 56,
    flexGrow: 1,
  },
  linkWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#D6D6D6',
    borderBottomWidth: 1,
  },
  link: {
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.4,
    paddingBottom: 12,
    paddingTop: 12,
    fontWeight: '300',
  },
  linkBage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 22,
    height: 22,
    backgroundColor: '#000',
    borderRadius: 11,
  },
  linkBageText: {
    color: '#ffffff',
    fontSize: 11,
  },
  backButton: {
    paddingHorizontal: 16,
  },
  headerLink: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
  },
});

export default HomeScreen;
