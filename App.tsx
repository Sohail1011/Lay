import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './src/config/StyleTheme';
import { Home } from './src/presentation/views/Home';

export default function App() {
  return (
    <View style={styles.main}>
      <Home />
    </View>
  )
}
