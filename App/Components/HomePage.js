import { Header } from 'react-native-elements'
import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'

import styles from '../Containers/Styles/LaunchScreenStyles'

import ListClothes from './ListClothes'

export default class HomePage extends Component {
	
	render() {
		return (
			<View>
				<Header 
		          centerComponent={{text: "Chari Pick", style:{ color: '#fff', fontSize:30}}}
		          backgroundColor='maroon'/>

				<ListClothes/>

			</View>			
		    
		    
		)
	}
}