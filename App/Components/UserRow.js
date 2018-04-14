import React, { Component } from 'react'
import { View } from 'react-native'

import { Avatar, Text } from 'react-native-elements'

export default class UserRow extends Component {
	constructor(props){
		const clothes = require('../Fixtures/clothes.json')
		super(props)
		var item = clothes[1]
		this.state = {
			user: item.user
		}
	}

	render() {
		return (
			<View>
				<View flexDirection="row" style={{margin:5}}>
					<View justifyContent="center">
						<Avatar 
							large
							rounded
							source={{uri: this.state.user.avatarUrl}}
						/>
					</View>
					<View justifyContent="center">
						<Text h4>{this.state.user.name}</Text>
						<Text h4>{+5}</Text>
					</View>
				</View>
			
			</View>
		)
	}
}