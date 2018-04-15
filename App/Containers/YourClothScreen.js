import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import YourClothes from '../Components/YourClothes';
import ClothListActions from '../Redux/ClothListRedux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/YourClothScreenStyle'

class YourClothScreen extends Component {

  componentDidMount = () => {
    this.props.getData()
  }

  onPressOfLeftButton = () =>
    this.props.navigation.navigate('LaunchScreen')

  onItemPress = (event, { itemId }) =>
    this.props.navigation.navigate('InterestedUserScreen', {itemId})

  render () {
    return (
      <YourClothes
        onPressOfLeftButton={this.onPressOfLeftButton}
        dataList={this.props.data}
        onItemPress={this.onItemPress} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.clothList.entities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(ClothListActions.clothListRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YourClothScreen)
