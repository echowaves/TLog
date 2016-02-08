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

import Sidemenu from '../../common/sidemenu'
import HomeScreen from '../../ios/home-screen'
import LoginScreen from '../../ios/login-screen'
import SidemenuButton from '../../common/sidemenu-button'
import {
  FormPickerScreen,
}
from '../../ios/form'

import ProfileScreen from '../../ios/profile-screen'
import ProfileEditScreen from '../../ios/profile-edit-screen'

import AboutScreen from '../../ios/about-screen'
import HelpScreen from '../../ios/help'
import HelpSectionScreen from '../../ios/help-section'
import TermsOfUseScreen from '../../ios/terms-of-use-screen'

import AppLaunch from './app__launch.js'
import AppPullingService from './app__pulling-service.js'
import AppNotificationService from './app__notification-service.js'
import AppLinking from './app__linking.js'

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
      <Sidemenu>
        <AppPullingService />
        <AppNotificationService />
        <AppLinking />

        <Router hideNavBar={false}>
          <Schema name="root" sceneConfig={Navigator.SceneConfigs.FloatFromRight} type="replace" renderLeftButton={() => { return <SidemenuButton />}} />
          <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
          <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>

          <Route name="home" title="Home" component={HomeScreen} schema="root" />

          <Route name="profile" title="Profile" component={ProfileScreen} schema="root" rightTitle="Edit" onRight={() => Actions.editProfile()} />
          <Route name="editProfile" title="Edit Profile" component={ProfileEditScreen} />

          <Route name="about" title="About" component={AboutScreen} schema="root" />

          <Route name="help" title="Help" component={HelpScreen} schema="root" />
          <Route name="helpSection" component={HelpSectionScreen} />

          <Route name="termsOfUse" title="Terms of Use" component={TermsOfUseScreen} />
        </Router>
      </Sidemenu>
    )
  }

  render() {
    // if (!this.props.viewer) {
    //   return this.renderGuestRouter()
    // }

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
