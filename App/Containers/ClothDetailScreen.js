import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView, Image } from 'react-native'
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
        <KeyboardAvoidingView behavior='position'>
          <Image source={require('../Images/ignite_logo.png')} style={{ width: '80%', height: 200, borderRadius: 20 }} />
          <Text style={styles.title}>Name</Text>
        </KeyboardAvoidingView>
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
