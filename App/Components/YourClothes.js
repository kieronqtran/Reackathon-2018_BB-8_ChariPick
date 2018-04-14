import React, { Component } from 'react'
import { View } from 'react-native'

import { Header, ButtonGroup } from 'react-native-elements'
import UserRow from './UserRow'
import ListClothes from './ListClothes'

export default class YourClothes extends Component {
	constructor(props){
		super(props)
		this.state = {
			selectedIndex: 0
		}
		this._updateSelected = this._updateSelected.bind(this)
	}

	_updateSelected = (selectedIndex) => this.setState({selectedIndex});

	render() {
		const { selectedIndex } = this.state
		const buttons = ['Free', 'Trade', 'Taken']

		return(
			<View>
				<Header 
		          centerComponent={{text: "Your store", style:{ color: '#fff', fontSize:22}}}
		          backgroundColor='maroon'/>
		        <UserRow/>
	        	<ButtonGroup 
					onPress={this._updateSelected} 
					selectedButtonStyle={{backgroundColor: 'maroon'}}  
					selectedTextStyle={{fontFamily:'sans-serif-thin', color: 'white'}} 
					selectedIndex={selectedIndex} 
					buttons={buttons}
					textStyle={{fontFamily:'sans-serif-thin'}}
				/>
				<ListClothes style={{margin:5}}/>
			</View>
		)
	}
}