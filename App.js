import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import cStyles from './components/styles'
import Header from './components/header'
import Section1 from './components/section1'


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Section1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...cStyles.fullWidth,
    flexDirection: 'column',
    flex:1,
    alignItems: 'flex-start',
  }
});
