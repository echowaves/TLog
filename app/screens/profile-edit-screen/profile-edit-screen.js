import React, { PropTypes, PickerIOS, Text, View, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux/native'
import { Actions } from 'react-native-router-flux'

import { updateViewerProfile } from '../../common/actions'
import { ScreenStyle } from '../../screens/screen'
import Button from '../../common/button'

import Style from './profile-edit-screen__style.js'
import Profile from './profile-edit-screen__profile.js'

let EditProfileScreen = React.createClass({

  contextTypes: {
    auth: React.PropTypes.object,
    viewer: React.PropTypes.object
  },

  getInitialState() {
  return {
    isDirty: false,
    saving: false,
    error: null,
   ...this.context.viewer }
  },

  render() {
    let photoUrl = this.state.photo ? {uri: this.state.photo, static: true} : require('../../common/images/default_avatar_thumb.png')

    if (this.state.isDirty && this.state.photoBase64) {
      photoUrl = {uri: this.state.photoBase64}
    }

    let props = Object.assign({}, {...this.state}, {photoUrl})

    return (
      <ScrollView style={[ScreenStyle.screen, Style.screen]}>
        <View>
          <Profile {...props} onChange={this._onProfileChange}/>
          { this.state.isDirty && <Button disabled={this.state.saving} disableWith='Please wait...' text="Save" size="l" view="primary" onPress={() => this._onSave()} /> }

        <Text style={Style.errorText}>{this.state.error}</Text>
        </View>
      </ScrollView>
    );
  },

  _onProfileChange(updates){
    this.setState(Object.assign({isDirty: true}, updates))
  },

  _onSave(){
    this.setState({error: null, saving: true})

    let onSuccess = () => { Actions.pop() }
    let onError = () => { this.setState({error: "Something went wrong", saving: false}) }

    this.props.dispatch(updateViewerProfile(this.context, this.state)).then(onSuccess, onError)
  },

});

export default connect()(EditProfileScreen)
