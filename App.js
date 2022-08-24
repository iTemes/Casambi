/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
  Image,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Images from './assets/images/';
import HomeScreen from './Pages/Home';
import LightScreen from './Pages/Light';
import SettingsScreen from './Pages/Settings';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </View>
  );
};

const GaleryScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </View>
  );
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FaqTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconPath;

          iconName = focused ? `${route.name}_active` : `${route.name}`;
          iconPath = Images[iconName];

          return (
            <View>
              <Image style={styles.logo} source={iconPath} />
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
          borderTopWidth: 1,
          borderTopColor: '#ababab',
          paddingHorizontal: 12,
          paddingVertical: 10,
        },
      }}>
      <Tab.Screen
        name="Light"
        component={LightScreen}
        options={{
          tabBarLabel: 'Источники света',
        }}
      />
      <Tab.Screen
        name="Galery"
        component={GaleryScreen}
        options={{
          tabBarLabel: 'Галерея',
        }}
      />
      <Tab.Screen
        name="Scenarios"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Сценарии',
        }}
      />
      <Tab.Screen
        name="More"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Подробнее',
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FAQ"
          component={FaqTabs}
          options={({navigation}) => ({
            title: 'Демо',
            headerStyle: {
              shadowColor: '#fff',
            },
            headerTitleStyle: {
              fontWeight: 'normal',
              fontSize: 16,
              lineHeight: 22,
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => alert('Изменить')}>
                <View style={styles.backButton}>
                  <Text style={styles.headerLink}>Изменить</Text>
                </View>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.backButton}>
                  <Text style={styles.headerLink}>Группа</Text>
                </View>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 60,
    fontSize: 36,
    fontWeight: '600',
  },
  linksContainer: {
    width: '100%',
    paddingHorizontal: 56,
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
    paddingBottom: 10,
    paddingTop: 12,
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
  logo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default App;
