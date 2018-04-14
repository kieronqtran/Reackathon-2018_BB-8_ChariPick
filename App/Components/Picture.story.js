import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View, Text } from 'react-native'
import Picture from './Picture'

storiesOf('Picture')
  .add('PictureWithHighlight', () => (
  	// <View style={{flexDirection:"column", flex:1}}>
	  // 	<View style={{flexDirection:"row", flex:1}}>
	  // 		<Picture/>
	  // 		<Picture/>
	  // 	</View>
	  	

  	// </View>
  	<View style={{flexDirection:"row", flex:1}}>
  		<Picture/>
  		<Picture/>
	</View>
    
  ))
  
  
