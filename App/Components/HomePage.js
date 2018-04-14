import { Header, Icon } from 'react-native-elements'
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
			<View >
				<Header 
		          leftComponent={{icon:'account-circle', color: '#fff'}}
		          centerComponent={{text: "Chari Pick", style:{ color: '#fff', fontSize:22, fontFamily:'sans-serif-dense'}}}
		          backgroundColor='maroon'
		          rightComponent={{icon:'add', color:'#fff'}}
		          />
		          
				<ListClothes/>

			</View>			
		    
		    
		)
	}
}