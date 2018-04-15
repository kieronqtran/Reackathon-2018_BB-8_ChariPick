import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import PostCloth from '../Components/PostCloth';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PostClothScreenStyle'

class PostClothScreen extends Component {
  onPressOfLeftButton = () =>
    this.props.navigation.navigate('LaunchScreen')
  render () {
    return (
      <PostCloth onPressOfLeftButton={this.onPressOfLeftButton} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PostClothScreen)
