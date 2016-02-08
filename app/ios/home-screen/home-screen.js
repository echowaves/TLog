import _ from 'lodash'
import React, { Component, PropTypes, Modal } from 'react-native'

import { Actions } from 'react-native-router-flux'

import { connect } from 'react-redux/native'

// import {
//   loadLocations, findClosestLocation, loadEquipmentItems, loadCategories,
//   deleteLocation, setCurrentLocation, newJob,
// } from '../../common/actions'

import { ScreenStyle } from '../../ios/screen'

import Style from './home-screen__style.js'


const {
  Text,
  View,
  TouchableHighlight,
} = React

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region: null
    }
  }


  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(({coords}) => {
    //   this.props.dispatch(findClosestLocation(this.context, coords))
    //   this.setState({
    //     region: {
    //       latitude: coords.latitude,
    //       longitude: coords.longitude,
    //     }
    //   })
    // })

    // this.props.dispatch(loadLocations(this.context))
    // this.props.dispatch(loadCategories(this.context))

    // if (!this.props.app.bypassPhoneConfirmation) {
    //   this._ensureConfirmedPhone(this.props.viewer)
    // }
  }



  render() {
    return (
      <View style={[Style.screen]}>
        <Text>
          home view
        </Text>
        </View>
    )
  }
  }

  HomeScreen.propTypes = {
    app: PropTypes.object,
    viewer: PropTypes.object,
  }

  HomeScreen.contextTypes = {
    viewer: PropTypes.object,
    auth: PropTypes.object,
  }

  const select = (state) => ({
    app: state.app,
    viewer: state.viewer,
  })

  export default connect(select)(HomeScreen)
