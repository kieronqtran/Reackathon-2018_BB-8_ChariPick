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
		const buttons = ['Give away', 'Trade', 'History']

		return(
			<View>
				<Header
					    leftComponent={{icon:'arrow-back', color: '#fff', onPress: this.props.onPressOfLeftButton}}
			        centerComponent={{text: "Your store", style:{ fontFamily:'sans-serif-dense', color: '#fff', fontSize:22}}}
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
				<ListClothes style={{margin:5}} data={this.props.dataList} onEachItemPress={this.props.onItemPress}/>
			</View>
		)
	}
}
