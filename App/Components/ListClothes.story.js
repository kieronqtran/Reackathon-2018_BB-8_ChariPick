import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import Picture from './Picture'

storiesOf('Picture')
  .add('PictureWithHighlight', () => (
    <View style={{ backgroundColor: 'black' }}>
      <Picture
        imageUrl= 'https://facebook.github.io/react/logo-og.png'
        onPress={() => { }}
      />
    </View>
    
  ))
  
  
