'use strict';

import React, {
  PropTypes, Component, ActivityIndicatorIOS, Text, TouchableOpacity, View
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux/native'
import { restoreSession } from '../../common/actions'
import { ScreenStyle } from '../../ios/screen'


class AppLauncher extends Component {
  componentDidMount(){
    this.props.dispatch(restoreSession())
  }

  componentWillReceiveProps(props) {
    if(!props.token) {
      Actions.login()
    }
  }

  render() {
    return (
      <View style={ScreenStyle.screen}>
        <ActivityIndicatorIOS
          animating={true}
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          size="large"
        />
      </View>
    )
  }
}

function select(state) {
  return {...state.auth}
}

export default connect(select)(AppLauncher)
