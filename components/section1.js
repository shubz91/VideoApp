import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import cStyles from './styles'
import VideoList from './videoList'
import CategoryList from './categoryList'

export default function Section1(props) {
  return (
    <View style={styles.container}>
      <CategoryList />
      <VideoList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...cStyles.fullWidth,
    flex:1,
  	padding:2,
    backgroundColor:'#fff',
  	borderBottomColor: '#00000030',
    borderBottomWidth: 1,
  },
  text: {
  	fontSize:20
  },
});
