import Picture from './Picture'
import React, { Component } from 'react'
import { AppRegistry, FlatList, StyleSheet, View } from 'react-native'
import { ListItems, Header } from 'react-native-elements'
import styles from '../Containers/Styles/LaunchScreenStyles'

export default class ListClothes extends Component {
	
	constructor(props) {
		const clothes = require('../Fixtures/clothes.json')
		super(props)
		this.state = {
			clothList: clothes
		}
	}

	_keyExtractor = (item, index) => item.id;

	render() {
		return (
			<View>
		        <FlatList
					numColumns={2}
					data={this.state.clothList}
					renderItem={({item}) => (<Picture  item_id={item.id.toString()} imageUrl={item.imageUrl}/>)}
					keyExtractor={this._keyExtractor}
				/>
		    </View>
			
			
		)
	}
}