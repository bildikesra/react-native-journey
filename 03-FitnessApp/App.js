import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/navigation/stacks/HomeStack';

import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
  );
}


