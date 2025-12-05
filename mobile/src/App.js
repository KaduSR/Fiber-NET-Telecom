import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Navigation />
      </SafeAreaView>
  );
};

export default App;