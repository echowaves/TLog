'use strict';

import React from 'react-native'
import { Actions } from 'react-native-router-flux'
import style from './login-screen__style.js'
import { connect } from 'react-redux/native'
import { login } from '../../common/actions'

let {
  Image,
  PixelRatio,
  ScrollView,
  Text,
  TouchableHighlight,
  TextInput,
  View,
} = React;

let LoginScreen = React.createClass({
  getInitialState() {
    return {
      login: {
        inProgress: false,
        error: null,
      },
      restore: {
        inProgress: false,
      },
      email: null,
      password: null
    }
  },

  render() {
    return (
      <View style={style.container}>
        <View style={style.loginTitleContainer}>
            <Text style={style.headerText}> Please Sign In </Text>
        </View>
        <View style={style.credentialsInputs}>
          <TextInput
            autoFocus={true}
            autoCorrect={false}
            autoCapitalize='none'
            style={style.textInput}
            keyboardType='email-address'
            placeholder='Email'
            value={this.state.email}
            onChangeText={(text) => this.setState({email: text})}
            onSubmitEditing={() => this._passwordInput.focus()}
          />

          <TextInput
            style={style.textInput}
            ref={(c) => this._passwordInput = c}
            secureTextEntry={true}
            placeholder='Password'
            onChangeText={(text) => this.setState({password: text})}
            returnKeyType='done'
            onSubmitEditing={() => this._doLogin()}
          />

          <Text style={style.errorText}> {this.state.login.error} </Text>
        </View>
      </View>
    )
  },

  _doLogin() {
    this.props.dispatch(login(this.state.email, this.state.password))
  },
})

function select(state) {
  return {...state.auth}
}

export default connect(select)(LoginScreen)
