import React, { Component } from 'react'
import { View } from 'react-native'

import { Avatar, Text, Header, Badge, ButtonGroup } from 'react-native-elements'

export default class UserRow extends Component {
	constructor(props){
		const clothes = require('../Fixtures/clothes.json')
		super(props)
		var item = clothes[1]
		this.state = {
			user: item.user,
			selectedIndex: 0
		}
		this._updateSelected = this._updateSelected.bind(this)
	}

	_updateSelected = (selectedIndex) => this.setState({selectedIndex});

	render() {
		const { selectedIndex } = this.state
		const buttons = ['Free', 'Trade', 'Taken']

		return (
			<View>
			
		        <Header 
		          centerComponent={{text: "Chari Pick", style:{ color: '#fff', fontSize:30}}}
		          backgroundColor='maroon'/>
		        <View flexDirection="row" style={{margin:8}}>
					<View justifyContent="center">
						<Avatar 
							large
							rounded
							source={{uri: this.state.user.avatarUrl}}
						/>
					</View>
					<View justifyContent="center" style={{margin:15}}>
						<Text h4>{this.state.user.name}</Text>
						<Badge value={10} containerStyle={{backgroundColor: 'maroon', width:'25%'}}/>
					</View>
				</View>
				
				<ButtonGroup 
					onPress={this._updateSelected} 
					selectedButtonStyle={{backgroundColor: 'maroon'}}  
					selectedTextStyle={{fontFamily:'sans-serif-thin', color: 'white'}} 
					selectedIndex={selectedIndex} 
					buttons={buttons}
					textStyle={{fontFamily:'sans-serif-thin'}}
				/>
		    </View>


		)
	}
}