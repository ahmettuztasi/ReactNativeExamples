import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function StyleSheetExample() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>******STYLE SHEET EXAMPLE*******</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem ipsum</Text>
        <Text>Lorem ipsum</Text>
        <Text>Lorem ipsum</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('StyleSheetExample', () => StyleSheetExample)