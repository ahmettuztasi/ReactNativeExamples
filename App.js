import React from 'react';
import StyleSheetExample from './Examples/StyleSheetExample'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App({ data1, data2 }) {
  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      <Text>{data1}</Text>
      <Text>{data2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});