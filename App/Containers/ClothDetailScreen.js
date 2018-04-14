import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { clothImage } from '../Images/ignite_logo.png'
import { Text } from 'react-native-elements';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ClothDetailScreenStyle'

class ClothDetailScreen extends Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.center}>
          <Image source={require('../Images/ignite_logo.png')} style={styles.img} />
        </View>
        <Text style={styles.title}>Name</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClothDetailScreen)
