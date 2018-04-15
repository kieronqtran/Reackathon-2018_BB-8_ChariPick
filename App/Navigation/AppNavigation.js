import { StackNavigator } from 'react-navigation'
import YourClothScreen from '../Containers/YourClothScreen'
import PostClothScreen from '../Containers/PostClothScreen'
import ClothDetailScreen from '../Containers/ClothDetailScreen'
import InterestedUserScreen from '../Containers/InterestedUserScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  YourClothScreen: { screen: YourClothScreen },
  PostClothScreen: { screen: PostClothScreen },
  ClothDetailScreen: { screen: ClothDetailScreen },
  LaunchScreen: { screen: LaunchScreen },
  InterestedUserScreen: { screen: InterestedUserScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
