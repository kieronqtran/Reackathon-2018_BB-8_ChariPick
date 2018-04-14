import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import ListClothes from './ListClothes'
const data = require('../Fixtures/clothes.json')
storiesOf('ListClothes')
  .add('ListOfPictures', () => (
    <ListClothes data={data}/>
  ))
