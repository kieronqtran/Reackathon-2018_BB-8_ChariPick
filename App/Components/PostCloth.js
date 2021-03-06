import React, { Component } from 'react'
import { AppRegistry, View, Text, Alert } from 'react-native'
import { Header, Button, Icon, FormLabel, FormInput } from 'react-native-elements'

export default class PostCloth extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: '',
			description: '',
			size: '',
			color: '',
			condition: '',
			imageUrl: 'https://via.placeholder.com/140x140',
			user: {

			}
		}
		this.onChangeName = this.onChangeName.bind(this)
		this.onChangeSize = this.onChangeSize.bind(this)
		this.onChangeDescription = this.onChangeDescription.bind(this)
		this.onChangeColor = this.onChangeColor.bind(this)
		this.onChangeCondition = this.onChangeCondition.bind(this)
	}

	onChangeName = (name) => this.setState({name})
	onChangeSize = (size) => this.setState({size})
	onChangeDescription = (description) => this.setState({description})
	onChangeColor = (color) => this.setState({color})
	onChangeCondition = (condition) => this.setState({condition})
	onSubmit = () => Alert.alert("Thanks for posting your cloth")
	onUploadImage = () => Alert.alert("Upload Image")

	render() {
		const {name, imageUrl, description, size, color, condition} = this.state
		return (

			<View >
				<Header
		          leftComponent={{icon:'arrow-back', color: '#fff',onPress: this.props.onPressOfLeftButton}}
		          centerComponent={{text: "Post", style:{ color: '#fff', fontSize:22, fontFamily:'sans-serif-dense'}}}
		          backgroundColor='maroon'
		        />
		        <View>
		        	<FormLabel style={{fontFamily:'sans-serif-dense'}} >Name of cloth</FormLabel>
		        	<FormInput onChangeText={this.onChangeName}/>
		        	<FormLabel style={{fontFamily:'sans-serif-dense'}} >Description</FormLabel>
		        	<FormInput onChangeText={this.onChangeDescription}/>
		        	<FormLabel style={{fontFamily:'sans-serif-dense'}} >Size</FormLabel>
		        	<FormInput onChangeText={this.onChangeSize}/>
		        	<FormLabel style={{fontFamily:'sans-serif-dense'}} >Color</FormLabel>
		        	<FormInput onChangeText={this.onChangeColor}/>
		        	<FormLabel style={{fontFamily:'sans-serif-dense'}} >Condition</FormLabel>
		        	<FormInput onChangeText={this.onChangeCondition}/>
		        	<View style={{flexDirection: 'row'}}>
		        		<FormLabel style={{fontFamily:'sans-serif-dense'}} >Image</FormLabel>
			        	<Button
				        	small
				        	title="Upload Image"
				        	iconRight={{name: 'image', type: 'evilicons'}}
				        	onPress={this.onUploadImage}
				        	borderRadius={90}
				        />
		        	</View>

		        </View>
		        <View style={{top: 20}}>
			        <Button
			        	small
			        	title="Submit"
			        	iconRight={{name: 'send-o', type: 'font-awesome'}}
			        	onPress={this.onSubmit}
			        	backgroundColor="maroon"
			        	borderRadius={90}
			        />
		        </View>
			</View>
		)
	}
}
