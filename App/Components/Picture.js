import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Alert, Image, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

export default class Picture extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			uri: props.imageUrl,
			key: props.item_id
		}
		
		this.height = height/2.5
	}

		

	onPress = () => {
		Alert.alert(this.state.uri)
	}

	render () {
	  return (
	  	<View style={{flex: 1}}>
	  		<TouchableHighlight style={{flex:1}} onPress={this.onPress} underlayColor="white">
	  			<Image 
	  				source={{uri: this.state.uri}}
	  				style={{flex: 1, height: this.height}}
	  			/>
			</TouchableHighlight>
	  	</View>
		
	  )
    }
}
