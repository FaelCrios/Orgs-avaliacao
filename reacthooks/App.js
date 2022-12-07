import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={Styles.screen}>
      <Home>Meu App</Home>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  screen:{
    flex: 1,
  }
})

export default App;
