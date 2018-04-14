import Picture from './Picture'
import React, { Component } from 'react'
import { AppRegistry, FlatList, StyleSheet, View } from 'react-native'

export default class ListClothes extends Component {
	static fromProps = {
		listClothes = this.props.clothList
	}

	render() {
		return (
			<FlatList>
				<View style={styles.listClothes}>
					<View>
						<Picture
					        imageUrl= 'https://facebook.github.io/react/logo-og.png'
						    onPress={() => { }}
						/>
					</View>
				</View>
			</FlatList>
		)
	}

	
}

conts styles = StyleSheet.create({
	listClothes: {
		flex: 1, 
		flexDirection: 'row'
	}
})