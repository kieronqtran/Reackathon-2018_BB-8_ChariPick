import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Button, Header } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome'
// Styles
import styles from './Styles/LaunchScreenStyles'
import ListClothes from '../Components/ListClothes'
import UserRow from '../Components/UserRow'

export default class LaunchScreen extends Component {
  render () {
    return (
      <ListClothes/>
    )
  }
}
