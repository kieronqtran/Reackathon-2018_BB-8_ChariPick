import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { Button } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome'
// Styles
import styles from './Styles/LaunchScreenStyles'
import InterestedUser from "./InterestedUser";

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <InterestedUser/>
      </View>
    )
  }
}
