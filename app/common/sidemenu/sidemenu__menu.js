'use strict';

import React from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './sidemenu__style.js'

let {
  View,
  Text,
  TouchableHighlight,
  Dimensions
} = React;

const deviceScreen = Dimensions.get('window');

let Badge = React.createClass({
  render() {
    let count = this.props.count

    if(count > 0) {
      return (
        <View style={styles.badge}>
          <Text style={styles.badgeCount}>{count}</Text>
        </View>
      )
    } else {
      return null
    }
  }
})


let Menu = React.createClass({
  statics: {
    menuWidth: deviceScreen.width * 4/5,
    menuHeight: deviceScreen.height
  },

  contextTypes: {
    menuActions: React.PropTypes.object.isRequired,
  },

  render() {
    return (
      <View style={[styles.container, {width: Menu.menuWidth, height: Menu.menuHeight}]}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Menu </Text>
          <Icon name='close' style={styles.close} onPress={this._closeMenu}></Icon>
        </View>

        <View style={styles.menuContainer}>
          <TouchableHighlight style={styles.menuItem} onPress={this._goHome}>
            <View style={styles.menuItemButton}>
              <Icon name="home" style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}> HOME</Text>
            </View>
          </TouchableHighlight>


          <TouchableHighlight style={styles.menuItem} onPress={this._goProfile}>
            <View style={styles.menuItemButton}>
              <Icon name="user" style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}> PROFILE</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.menuItem} onPress={this.props.onLogout}>
            <View style={styles.menuItemButton}>
              <Icon name="sign-out" style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}> LOGOUT</Text>
            </View>
          </TouchableHighlight>

          <View style={styles.horizontalLine}></View>

          <TouchableHighlight style={styles.menuItem} onPress={this._goHelp}>
            <View style={styles.menuItemButton}>
              <Text style={styles.menuItemText}> NEED HELP?</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.menuItem} onPress={this._goAbout}>
            <View style={styles.menuItemButton}>
              <Text style={styles.menuItemText}> ABOUT</Text>
            </View>
          </TouchableHighlight>

        </View>
      </View>
    )
  },

  _closeMenu() {
    this.context.menuActions.close();
  },

  _goHome() {
    Actions.home()
    this._closeMenu()
  },

  _goProfile() {
    Actions.profile()
    this._closeMenu()
  },

  _goAbout() {
    Actions.about()
    this._closeMenu()
  },

  _goHelp() {
    Actions.help()
    this._closeMenu()
  },


});

export default Menu
