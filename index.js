import './App/Config/ReactotronConfig'
// import Expo from 'expo'
import DebugConfig from './App/Config/DebugConfig'
import {AppRegistry} from 'react-native'

const Entrypoint =
  __DEV__ && DebugConfig.launchStorybook
    ? require('./storybook').default
    : require('./App/Containers/App').default

// Expo.registerRootComponent(Entrypoint)
AppRegistry.registerComponent('Reackathon2018BB8ChariPick', () => Entrypoint)
