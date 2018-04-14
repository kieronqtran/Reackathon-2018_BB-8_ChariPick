import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import DebugConfig from './App/Config/DebugConfig'

const Entrypoint =
  __DEV__ && DebugConfig.launchStorybook
    ? require('./storybook').default
    : require('./App/Containers/App').default

AppRegistry.registerComponent('Reackathon2018BB8ChariPick', () => Entrypoint)