/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  View,
  Text,
  Modal,
} from 'react-native';
import Slider from '@react-native-community/slider';
import ModalSheet from '../ModalSheet';
import SliderRange from '../SliderRange';

const LightControl = ({data, ...props}) => {
  const {image, label, isSetting, value, isGroup} = data;
  const [lightValue, setLightValue] = useState(value);
  const [power, setPower] = useState(true);

  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <View style={[styles.container, power ? styles.on : styles.off]}>
        <Pressable
          delayLongPress="500"
          onPress={() => {
            power ? setPower(false) : setPower(true);
            power ? setLightValue(0) : setLightValue(100);
            isGroup && props.onShow();
          }}
          onLongPress={() => {
            setIsVisible(true);
          }}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={{
                uri: image,
              }}
            />
          </View>
          <View style={[styles.bar, isSetting ? {opacity: 1} : {opacity: 0}]}>
            <View
              style={[
                styles.progressBar,
                {width: `${lightValue}%`},
                power ? styles.on : styles.off,
              ]}
            />
          </View>
          <Text style={styles.label}>{label}</Text>
        </Pressable>
      </View>
      <ModalSheet visible={isVisible} onDismiss={() => setIsVisible(false)}>
        <View style={styles.slidersContainer}>
          <View style={styles.sliderWrapper}>
            <View style={styles.sliderText}>
              <Text style={styles.sliderName}>Локусы</Text>
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
                value={lightValue}
                step={1.5}
                onValueChange={(changedValue) => setLightValue(changedValue)}
              />
              <TouchableOpacity
                onPress={() => {
                  let incValue = lightValue + 10;
                  lightValue < 91
                    ? setLightValue(incValue)
                    : setLightValue(100);
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
          <SliderRange name="Линейные" value="40" />
          <SliderRange name="Фреймы" value="23.5" />
          <SliderRange name="Зумы" value="80" />
        </View>
      </ModalSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
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

export default LightControl;
