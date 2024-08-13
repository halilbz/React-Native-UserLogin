import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigation from './src/navigation/RootNavigation';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator;
const App = () =>{

  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>
  )
}

export default App

