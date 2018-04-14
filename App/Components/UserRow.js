import React, { Component } from 'react'
import { View, Alert, TouchableHighlight } from 'react-native'

import { Avatar, Text, Badge } from 'react-native-elements'

export default class UserRow extends Component {
	constructor(props){
		const clothes = require('../Fixtures/clothes.json')
		super(props)
		var item = clothes[1]
		this.state = {
			user: item.user,
			
		}
	
	}

	onPress = () => {
		Alert.alert(
			"Get your coupons",
			"Here are some currently available for you"
		)
	}

	render() {
		const { selectedIndex } = this.state
		const buttons = ['FREE', 'TRADE', 'TAKEN']

		return (
	        <View flexDirection="row" style={{margin:8}}>
				<View justifyContent="center">
					<Avatar 
						large
						rounded
						source={{uri: this.state.user.avatarUrl}}
					/>
				</View>
				<View justifyContent="center" style={{margin:15}}>
					<Text style={{fontFamily:'sans-serif-thin', fontSize:24}}>{this.state.user.name}</Text>
					<View flexDirection='row' justifyContent="center">
						<Badge value={10} containerStyle={{backgroundColor: 'maroon'}}/>
						<View justifyContent="center" style={{flex:1, left:5}}>
							<TouchableHighlight onPress={this.onPress} underlayColor="white">
								<Text style={{fontStyle: 'italic', fontFamily:'sans-serif-thin', color:'maroon'}}>Get your coupons</Text>
							</TouchableHighlight>
						</View>
					</View>
				</View>
			</View>
		)
	}
}