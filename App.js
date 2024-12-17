import React from 'react';
import { SafeAreaView } from 'react-native';
import DrawerExample from './components/Drawer/DrawerExample';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerExample />
    </SafeAreaView>
  );
};

export default App;
