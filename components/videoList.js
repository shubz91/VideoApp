import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {getVideoList} from './webRequests'

function VideoListItem(props){
	return (
		<View style={itemStyle.container}>
			<Image
			  style={itemStyle.thumbnail} 
		      source={{uri:props.data.thumbnail_120_url}}
		    />
		    <View style={itemStyle.infoText}>
				<Text style={itemStyle.title}>{props.data.title}</Text>
				<Text style={itemStyle.channel}>{props.data.channel} . {props.data.id}</Text>
			</View>
		</View>
	)
}

const itemStyle = StyleSheet.create({
	container:{
		backgroundColor:'#ffffff99',
		padding:5,
		borderBottomColor:'#00000010',
		borderBottomWidth:1,
		flexDirection:'row'
	},
	thumbnail:{
		height:'100%',
		width:100,
		alignItems: "stretch",
		marginRight:10
	},
	infoText:{
		flex:1
	},
	title:{
		fontSize: 15,
    	fontWeight: "bold"
	},
	channel:{
		fontSize:12
	},
	owner:{
		fontSize:10
	}
})


class VideoList extends Component {
	constructor(props){
		super(props)
		this.state = {
			vList:[],
			loaded:0,
			has_more:true
		}
	}

	componentDidMount(){
		getVideoList(1)
		.then(res => {
			this.setState({
				vList: res.list,
				pageLoaded: res.page,
				has_more:res.has_more
			})
		})
		.catch(err => {
			console.log(err)
		})
	}

	onEndReached = () => {
		if(this.state.has_more){
			getVideoList(this.state.pageLoaded + 1)
				.then(res => {
					this.setState((state) => {
						return {
							vList: [...new Set([...state.vList, ...res.list])],
							pageLoaded: res.page,
							has_more:res.has_more
						}
					})
				})
				.catch(err => {
					console.error(err)
				})
		}
	}

	render(){
		let irendered = this.state.vList.map((i) => <VideoListItem key={i.id} data={i} />)
		return (<FlatList
			data={this.state.vList} 
			extraData={this.state.vList} 
			renderItem={({item}) => <VideoListItem data={item} />} 
			keyExtractor={(item) => item.id}
			onEndReached={this.onEndReached}
			onEndReachedThreshold='0.2'
		/>)
	}
}

export default VideoList