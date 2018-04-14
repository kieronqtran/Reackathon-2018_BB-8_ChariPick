import React, { Component } from 'react'
import { ScrollView, Image, View, LayoutAnimation, Text, KeyboardAvoidingView  } from 'react-native'
import { connect } from 'react-redux'
import { Text, Icon } from 'react-native-elements';
import ClothActions from '../Redux/ClothRedux'

// Styles
import styles from './Styles/ClothDetailScreenStyle'

class ClothDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false
    };
  }

  componentDidMount() {
    // Get the default state

    const { params } = this.props.navigation.state
    this.props.getItem(parseInt(params.itemId))
  }
  
  render () {
    const { favourite } = this.state;

    return (
      <ScrollView style={styles.container}>

        <Image source={require('../Images/ignite_logo.png')} style={styles.img} />
        <View style={{ flexDirection: 'row'}}>
            <Text style={styles.title}>Name</Text>
            <View justifyContent="center" style={{ right: 60 }}>
              <Icon
                name={favourite ? 'heart' : 'heart-o'}
                type='font-awesome'
                color={favourite ? '#F44336' : 'rgb(50,50,50)'}
                size={30}

                onPress={() => this.setState({ favourite: !favourite })}
                />
              </View>
        </View>

        <Text style={styles.subTitle}>DESCRIPTION</Text>
        <Text style={styles.info}>The description of the item will be inserted here</Text>

        <Text style={styles.subTitle}>INFO</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1}}>
          <View>
            <Text style={styles.infoLeft}>Size    </Text>
            <Text style={styles.infoLeft}>Color   </Text>
            <Text style={styles.infoLeft}>Condition   </Text>
          </View>
          <View>
            <Text style={styles.infoRight}>M</Text>
            <Text style={styles.infoRight}>Beige</Text>
            <Text style={styles.infoRight}>80%</Text>
          </View>
          <Text>                  </Text>
          <View>
            <Text style={styles.infoLeft}>City    </Text>
            <Text style={styles.infoLeft}>Purpose   </Text>
            <Text style={styles.infoLeft}>Condition   </Text>
          </View>
          <View>
            <Text style={styles.infoRight}>HCMC</Text>
            <Text style={styles.infoRight}>Charity</Text>
            <Text style={styles.infoRight}>80%</Text>
          </View>
        </View>
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
