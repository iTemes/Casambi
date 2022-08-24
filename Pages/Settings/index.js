/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ListItem, Badge, Divider} from 'react-native-elements';

const list = [
  {
    title: 'Timers',
  },
  {
    title: 'Switchers',
  },
  {
    title: 'Sensors',
  },
  {
    title: 'Gateways',
  },
  {
    title: 'Network setup',
  },
];

const list2 = [
  {
    title: 'Nearby devices',
  },
  {
    title: 'Change network',
  },
  {
    title: 'App settings',
  },
  {
    title: 'Help',
  },
  {
    title: 'Network setup',
  },
];

import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Divider style={{height: 34, backgroundColor: 'transparent'}} />
        <View style={styles.list}>
          {list.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <Badge
                value={10}
                textStyle={{color: '#fff'}}
                badgeStyle={{
                  backgroundColor: '#d6d6d6',
                  width: 22,
                  height: 22,
                  borderRadius: 12,
                }}
              />
              <ListItem.Chevron name="chevron-forward" />
            </ListItem>
          ))}
        </View>
        <Divider style={{height: 34, backgroundColor: 'transparent'}} />
        <View>
          {list2.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron name="chevron-forward" />
            </ListItem>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d6d6',
  },
});

export default SettingsScreen;
