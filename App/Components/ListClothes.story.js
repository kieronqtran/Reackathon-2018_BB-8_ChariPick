import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import ListClothes from './ListClothes'

storiesOf('ListClothes')
  .add('ListOfPictures', () => (
    <ListClothes/>
  ))