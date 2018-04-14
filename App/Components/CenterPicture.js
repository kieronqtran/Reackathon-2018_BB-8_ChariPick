import React, { Component } from 'react'
import { View, Image, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

export default class CenterPicture extends Component {

	constructor(props) {
		super(props)
		this.state = {
		    "id": 1,
		    "name": "Item Number 1",
		    "description": "Sint velit ut omnis quod molestiae tempora esse omnis dignissimos amet molestias aliquid voluptatum maiores id reprehenderit vel omnis minima.",
		    "size": "M",
		    "color": "Navy",
		    "imageUrl": "http://lorempixel.com/140/140/fashion",
		    "user": {
		        "id": 1,
		        "name": "Matt Shields",
		        "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/wake_gs/128.jpg"
		    }
		}
		this.height = height/2
		this.width = width/1.75
	}

	render() {
		return(
			<View style={{flexDirection: 'row', justifyContent: 'center'}}>
				<Image source={{uri: "http://lorempixel.com/140/140/fashion",}}
			  		style={{width: this.width, height: this.height}}>
			  	</Image>
			</View>
		)
	}
	
}