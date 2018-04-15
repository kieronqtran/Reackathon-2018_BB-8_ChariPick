import { Header, Icon, Text } from 'react-native-elements'
import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'

import styles from '../Containers/Styles/LaunchScreenStyles'

import ListClothes from './ListClothes'

export default class HomePage extends Component {

	ava = () => {
		return(
			<Icon name='user' type='evil-cons'/>
		)
  }

	render() {
		return (
			<View style={{flex: 1}}>
				<Header
		          leftComponent={{icon:'home', color: '#fff', onPress: this.props.onPressOfLeftButton}}
		          centerComponent={{text: "Chari Pick", style:{ color: '#fff', fontSize:22, fontFamily:"sans-serif-thin"}}}
		          backgroundColor='maroon'
		          />
				<ListClothes  data={this.props.data} onEachItemPress={this.props.onEachItemPress}/>
			</View>
		)
	}
}
