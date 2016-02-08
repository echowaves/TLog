import _ from 'lodash'
import React, { View, Component } from 'react-native'

import { connect } from 'react-redux/native'

import { Actions } from 'react-native-router-flux'
import SideMenu from 'react-native-side-menu'
import { toggleSidebar, logout } from '../../common/actions'

import Menu from './sidemenu__menu.js'
import Style from './sidemenu__style.js'

class AppSideMenu extends Component {
  componentWillReceiveProps(props){
    typeof props.showSidebar == "undefined"
      ? this.refs.sidemenu.getMenuActions().toggle()
      : props.showSidebar
        ? this.refs.sidemenu.getMenuActions().open()
        : this.refs.sidemenu.getMenuActions().close()
  }

  render() {
    return (
      <SideMenu
        menu={ <Menu {...this.props} />}
        defaultOpen={false}
        isOpen={this.props.showSidebar}
        onChange={this.props.onToggle}
        openMenuOffset={ Menu.menuWidth }
        ref='sidemenu'>
        <View style={Style.rootContainer} >
          {this.props.children}
        </View>
      </SideMenu>
    )
  }
}

function select(state) {
  return {
    ...state.sidebar,
    unreadCurrentRequestsCount: _.filter(state.notifications.serviceRequests, ({isActive}) => isActive).length,
  }
}

function actions(dispatch) {
  return {
    onLogout: () => dispatch(logout()),
    onToggle: (isOpen) => dispatch(toggleSidebar(isOpen)),
  }
}

export default connect(select, actions)(AppSideMenu)
