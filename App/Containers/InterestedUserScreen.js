import React, { Component } from 'react'
import { Image, View, ScrollView, Alert } from 'react-native'
import { connect } from 'react-redux'
import { Card, Button, Avatar, Text, Icon, Header } from 'react-native-elements'
import ClothActions from '../Redux/ClothRedux'

import styles from './Styles/InterestedUserStyle'

class InterestedUserScreen extends Component {
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

  onPressOfLeftButton = () =>
    this.props.navigation.navigate('YourClothScreen')

  render() {
    const { favourite } = this.state;
    return (
      <View style={{flex: 1}}>
        <Header
            leftComponent={{icon:'arrow-back', color: '#fff', onPress: this.onPressOfLeftButton}}
            centerComponent={{text: "Detail", style:{ fontFamily:'sans-serif-condensed', color: '#fff', fontSize:22}}}
            backgroundColor='maroon'/>
        <ScrollView >
          <Image source={{uri: this.props.data.imageUrl}} style={styles.img} />

          <View style={{ flexDirection: 'row'}}>
              <Text style={styles.title}>{this.props.data.name}</Text>
              <View justifyContent="center" style={{ right: 60 }}>
                <Icon
                  name={favourite ? 'md-checkmark-circle' : 'md-checkmark-circle-outline'}
                  type='ionicon'
                  color={favourite ? '#F44336' : 'rgb(50,50,50)'}
                  size={30}
                  onPress={() => {
                      this.setState({ favourite: !favourite })
                      if(!favourite){
                        Alert.alert("This cloth has been taken")
                      }
                    }
                  }
                  />
                </View>
          </View>

          <Text style={styles.subTitle}>DESCRIPTION</Text>
          <Text style={styles.info}>{this.props.data.description}</Text>

          <Text style={styles.subTitle}>INFO</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1}}>
            <View>
              <Text style={styles.infoLeft}>Size    </Text>
              <Text style={styles.infoLeft}>Color   </Text>
              <Text style={styles.infoLeft}>Condition   </Text>
            </View>
            <View>
              <Text style={styles.infoRight}>{this.props.data.size}</Text>
              <Text style={styles.infoRight}>{this.props.data.color}</Text>
              <Text style={styles.infoRight}>80%</Text>
            </View>
            <Text></Text>
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
          <Card>
            <View style={{flexDirection:'row'}}>
              <View justifyContent="center">
                  <Avatar
                    medium
                    rounded
                    source={require('../Images/BG.png')}
                  />
                </View>
              <Text style={{left: 10, flex:1}}>
                You'll probably find you'll have great mileage
                in Ignite apps without even touching these 2 files.
              </Text>
              <View style={{flexDirection:'column', alignItems:'flex-end'}}>
                <Icon
                  name='check'
                  type="entypo"
                  onPress={() => Alert.alert("Start contacting")}
                  underlayColor="maroon"
                />
                <Icon
                  name='cross'
                  type="entypo"
                  size={30}
                  onPress={() => Alert.alert("Delete this request")}
                  underlayColor="maroon"
                />
              </View>
            </View>
          </Card>
          <Card>
            <View style={{flexDirection:'row'}}>
              <View justifyContent="center">
                  <Avatar
                    medium
                    rounded
                    source={require('../Images/BG.png')}
                  />
                </View>
              <Text style={{left: 10, flex:1}}>
                so when you're ready to add something non-visual
                or something visual like an overlay, you have spots to place these additions.
              </Text>
              <View style={{left: 3, flexDirection:'column', alignItems:'flex-end'}}>
                <Icon
                  name='check'
                  type="entypo"
                  onPress={() => Alert.alert("Start contacting")}
                  underlayColor="maroon"
                />
                <Icon
                  name='cross'
                  type="entypo"
                  size={30}
                  onPress={() => Alert.alert("Delete this request")}
                  underlayColor="maroon"
                />
              </View>
            </View>
          </Card>

        </ScrollView>

      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.cloth.entity ||
    {
        "id": 0,
        "name": "",
        "description": "",
        "size": "",
        "color": "",
        "imageUrl": "https://via.placeholder.com/140x140",
        "user": {
            "id": 0,
            "name": "",
            "avatarUrl": ""
        }
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItem: (id) => dispatch(ClothActions.clothRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterestedUserScreen)
