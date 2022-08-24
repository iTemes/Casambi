import React, {useState} from 'react';

import Slider from '@react-native-community/slider';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';

const SliderRange = (props) => {
  const {name, value} = props;
  const [lightValue, setLightValue] = useState(+value);

  return (
    <View style={styles.sliderWrapper}>
      <View style={styles.sliderText}>
        <Text style={styles.sliderName}>{name}</Text>
        <Text style={styles.sliderValue}>{lightValue}%</Text>
      </View>
      <View style={styles.sliderControls}>
        <TouchableOpacity
          onPress={() => {
            let decValue = lightValue - 10;
            lightValue > 10 ? setLightValue(decValue) : setLightValue(0);
          }}>
          <View>
            <Image
              style={styles.sliderBtn}
              source={require('../../assets/images/minus.png')}
            />
          </View>
        </TouchableOpacity>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="rgba(0, 0, 0, .2)"
          maximumTrackTintColor="rgba(0, 0, 0, .2)"
          thumbTintColor="#000000"
          trackImage={require('../../assets/images/track.png')}
          thumbImage={require('../../assets/images/trackTumb.png')}
          value={+lightValue}
          step={1.5}
          onValueChange={(changedValue) => setLightValue(changedValue)}
        />
        <TouchableOpacity
          onPress={() => {
            let incValue = lightValue + 10;
            lightValue < 91 ? setLightValue(incValue) : setLightValue(100);
          }}>
          <View>
            <Image
              style={styles.sliderBtn}
              source={require('../../assets/images/plus.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '33%',
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 72,
    height: 72,
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 36,
    marginHorizontal: 'auto',
  },
  imageWrapper: {
    marginBottom: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 11,
    lineHeight: 14,
    textAlign: 'center',
  },
  bar: {
    position: 'relative',
    width: 72,
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, .33)',
    marginBottom: 7,
  },
  progressBar: {
    position: 'absolute',
    left: 0,
    height: 1,
    width: 50,
    backgroundColor: '#000',
  },
  off: {
    opacity: 0.45,
  },
  on: {
    opacity: 1,
  },
  slidersContainer: {
    alignItems: 'center',
    paddingBottom: 35,
  },
  sliderWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },
  sliderControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 26,
  },
  sliderText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 233,
  },
  slider: {
    width: 233,
    height: 40,
    overflow: 'hidden',
  },
  sliderBtn: {
    width: 24,
    height: 24,
  },
  sliderName: {
    fontSize: 11,
    lineHeight: 22,
    fontWeight: '400',
  },
  sliderValue: {
    fontSize: 11,
    lineHeight: 22,
    fontWeight: '400',
  },
});

export default SliderRange;
