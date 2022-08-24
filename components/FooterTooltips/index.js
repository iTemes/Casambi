import React from 'react';

import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';

const FooterTooltips = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <TouchableOpacity>
          <View>
            <Image
              style={styles.logo}
              source={require('./images/settings.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Image
              style={styles.logo}
              source={require('./images/question.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 9,
    flexGrow: 0,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default FooterTooltips;
