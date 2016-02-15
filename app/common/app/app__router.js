import React, {
  Component, PropTypes, Navigator, View
}
from 'react-native'
import {
  Actions, Router, Route, Schema,
}
from 'react-native-router-flux'

import {
  connect,
}
from 'react-redux/native'

import HomeScreen from '../../screens/home-screen'
import LoginScreen from '../../screens/login-screen'

import ProfileScreen from '../../screens/profile-screen'
import ProfileEditScreen from '../../screens/profile-edit-screen'

import AppLaunch from './app__launch.js'

class AppRouter extends Component {
  getChildContext() {
    return {
      account: this.props.account,
      viewer: this.props.viewer,
      auth: this.props.auth,
    }
  }

  renderGuestRouter() {
    return (
      <Router hideNavBar={false}>
          <Route name="launch" component={AppLaunch} initial title="TRADE LOG" type="replace"/>
          <Route name="login" component={LoginScreen} title="Login" type="replace"/>
      </Router>
    )
  }

  renderUserRouter() {
    return (
          <Route name="home" title="Home" component={HomeScreen} schema="root" />
        )
  }

  render() {
    if (!this.props.viewer) {
      return this.renderGuestRouter()
    }

    return this.renderUserRouter()
  }
}

AppRouter.propTypes = {
  viewer: PropTypes.object,
  auth: PropTypes.object,
  account: PropTypes.object,
}

AppRouter.childContextTypes = {
  viewer: PropTypes.object,
  auth: PropTypes.object,
  account: PropTypes.object,
}

const select = (state) => ({
  viewer: state.viewer,
  auth: state.auth,
  account: state.account,
})

export default connect(select)(AppRouter)
