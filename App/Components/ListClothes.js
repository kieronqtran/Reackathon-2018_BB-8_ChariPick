import Picture from './Picture'
import React, { Component } from 'react'
import { AppRegistry, FlatList, StyleSheet, View } from 'react-native'
import { ListItems } from 'react-native-elements'
import styles from '../Containers/Styles/LaunchScreenStyles'
import { Header } from 'react-native-elements'

export default class ListClothes extends Component {

	constructor(props) {
		super(props)
		this.state = {
			clothList: props.data
		}
	}

	_keyExtractor = (item, index) => item.id;

	render() {
		return (
			<View style={styles.mainContainer}>
		        <Header
		          centerComponent={{text: "Chari Pick", style:{ color: '#fff', fontSize:30}}}
		          backgroundColor='maroon'/>
		        <FlatList
					numColumns={2}
					data={this.state.clothList}
					renderItem={({item}) => (<Picture  item_id={item.id.toString()} onPress={this.props.onEachItemPress} imageUrl={item.imageUrl}/>)}
					keyExtractor={this._keyExtractor}
				/>
		    </View>


		)
	}
}
