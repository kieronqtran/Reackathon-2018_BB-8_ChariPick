import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'
import { Text } from 'react-native-elements';

export default StyleSheet.create({

  img: {
    width: '100%',
    height: 250,
    marginTop: 10,
  },

  title: {
    fontFamily: 'sans-serif-thin',
    fontSize: 30,
    marginLeft: 40,
    marginVertical: Metrics.doubleBaseMargin,
    flex: 1
  },

    subTitle: {
      fontFamily: 'sans-serif-thin',
      marginLeft: 40,
      marginVertical: Metrics.baseMargin
    },

    info: {
      fontFamily: 'sans-serif-condensed',
      marginLeft: 40,
      marginVertical: Metrics.baseMargin
    },

    infoLeft: {
      fontFamily: 'sans-serif-thin',
      textAlign: 'right',
      marginVertical: Metrics.baseMargin
    },

    infoRight: {
      fontFamily: 'sans-serif-condensed',
      textAlign: 'left',
      marginVertical: Metrics.baseMargin
    }

});
