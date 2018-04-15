import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { Card, Button, Avatar, Text, Icon } from 'react-native-elements'

import styles from './Styles/InterestedUserStyle'

export default class InterestedUserScreen extends Component {
  render() {
    return (
      <Card>
        <View style={{flexDirection:'row'}}>
          <View justifyContent="center">
              <Avatar
                medium
                rounded
                source={require('../Images/BG.png')}
              />
            </View>
          <Text style={{left: 10, flex:1}}>
            You'll probably find you'll have great mileage
            in Ignite apps without even touching these 2 files.
          </Text>
          <View style={{flexDirection:'column', alignItems:'flex-end'}}>
            <Icon
              name='check'
              type="entypo"
            />
            <Icon
              name='cross'
              type="entypo"
              size={30}
            />
          </View>
        </View>

      </Card>
    )
  }
}
