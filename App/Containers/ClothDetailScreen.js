import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import ClothActions from '../Redux/ClothRedux'

// Styles
import styles from './Styles/ClothDetailScreenStyle'

class ClothDetailScreen extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Get the default state

    const { params } = this.props.navigation.state
    this.props.getItem(parseInt(params.itemId))
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>ClothDetailScreen
            {JSON.stringify(this.props.data, null, 4)}
          </Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.cloth.entity
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItem: (id) => dispatch(ClothActions.clothRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClothDetailScreen)
