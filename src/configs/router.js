import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import {Home, Bookmark, Profile, GetStarted} from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigator {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

class router extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    );
  }
}

export default router;
