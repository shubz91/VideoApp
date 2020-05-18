import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import {getCategories} from './webRequests'

function CategoryList(){

	const [li, setLi] = useState([])

	useEffect(() => {
		getCategories(1).then((res) => {
			setLi(res.list)
		})
	}, [])

	const buttonOnPress = () => {
		return true
	}

	return (
		<ScrollView horizontal={true} style={styles.cont}>
		{
			li.map((item) => {
				return <Button key={item.id} 
					style={styles.catItem} 
					title={item.name} 
					onPress={buttonOnPress} 
					color="#555"
					accessibilityLabel={item.desciption} />
			})
		}
		</ScrollView>
	)
}


const styles = StyleSheet.create({
	cont:{
		flexDirection:'row'
	},
	catItem:{
		flex:1,
		paddingTop:5,
		paddingBottom:10,

	}
})

export default CategoryList