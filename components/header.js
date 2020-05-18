import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import cStyles from './styles'

export default function Header(props) {
  return (
    <View style={styles.container}>
	    <LinearGradient
	          colors={['#f0f8ff', 'transparent']}
	          style={cStyles.fillContainer}
	     />
    	<View style={styles.leftOpt}>
    		<Text style={styles.text}>Video</Text>
    	</View>
    	<View style={styles.rightOpt}>
    		<Text style={styles.text}>Opts</Text>
    	</View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  	...cStyles.fullWidth,
  	padding:10,
	flexDirection:'row',
	borderBottomColor: '#00000010',
    borderBottomWidth: 1,
  },
  leftOpt: {
  	flex:1
  },
  rightOpt: {
  	width:100
  },
  text: {
  	fontSize:20
  },
});
