import React from 'react';

import {View, ScrollView, StyleSheet} from 'react-native';

const Test = () => {
  return (
    <View style={styles.container}>
      <View style={styles.large} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
      </ScrollView>
      <View style={styles.large} />
      <View style={styles.small} />
      <View style={styles.large} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  small: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  large: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
});

export default Test;
