import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'
import { Text } from 'react-native-elements';

export default StyleSheet.create({
  //container: {
  //  alignItems: 'center',
  //},

  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  img: {
    width: '80%',
    height: 250,
    borderRadius: 15,
    marginTop: 30
  },

  title: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 40,
    marginVertical: Metrics.doubleBaseMargin





  }
});
