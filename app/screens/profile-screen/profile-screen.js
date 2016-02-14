import React, { Component, PropTypes, PickerIOS, Text, View, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux/native'


import { ScreenStyle } from '../../screens/screen'

import Style from './profile-screen__style.js'
import Profile from './profile-screen__profile.js'

class ProfileScreen extends Component {

  render() {
    let { viewer } = this.context
    let photoUrl = viewer.photo ? {uri: viewer.photo, static: true} : require('../../common/images/default_avatar_thumb.png')
    let props = { ...viewer, photoUrl }

    return (
      <Profile {...props}/>
    );
  }

}

ProfileScreen.contextTypes = {
  auth: React.PropTypes.object,
  viewer: React.PropTypes.object
}

export default connect()(ProfileScreen)
