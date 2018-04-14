import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Alert } from 'react-native'
import { Button, Header } from 'react-native-elements'
import { connect } from "react-redux";
// import Icon from 'react-native-vector-icons/FontAwesome'
// Styles
import ClothListActions from '../Redux/ClothListRedux'
import styles from './Styles/LaunchScreenStyles'
import ListClothes from '../Components/ListClothes'
import UserRow from '../Components/UserRow'
import HomePage from '../Components/HomePage'
import YourClothes from '../Components/YourClothes'

class LaunchScreen extends Component {

  componentDidMount() {
    this.props.getData()
  }

  onPress = (event, { itemId }) => {
    this.props.navigation.navigate('ClothDetailScreen', { itemId })
  }
  render () {
    return (
      // !this.props.loading ? <ListClothes data={this.props.data} onEachItemPress={this.onPress}/>: <Text>Loading...</Text>
      <HomePage data={this.props.data} onEachItemPress={this.onPress}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.clothList.fetching,
    data: require('../Fixtures/clothes.json')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(ClothListActions.clothListRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)

