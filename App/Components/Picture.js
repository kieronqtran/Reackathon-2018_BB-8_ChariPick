import React, { Component } from 'react'
import { View, Text, TouchableHighlight, Alert, Image } from 'react-native'


export default class Picture extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			uri: 'https://facebook.github.io/react/logo-og.png'
		}
	}

	onPress = () => {
		Alert.alert("Yay!")
	}

	render () {
	  return (
	  	<View style={{flex:1, height:280}}>
	  		<TouchableHighlight style={{flex:1}} onPress={this.onPress} underlayColor="white">
	  			<Image 
	  				source={{uri: this.state.uri}}
	  				style={{flex: 1, height: 140}}
	  			/>
			</TouchableHighlight>
	  	</View>
		
	  )
    }
}
