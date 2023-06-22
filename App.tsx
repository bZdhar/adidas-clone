import React from 'react';
import { View, Image } from 'react-native';
import LoginPage from './src/screens/login';
import Home from './src/screens/home';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <LoginPage /> */}
      <Home/>
    </View>
  );
};

export default App;