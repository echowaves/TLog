import React, { Component, PropTypes, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux/native'
import { toggleSidebar } from '../../common/actions'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './sidemenu-button__styles'

class SidemenuButton extends Component {
  render() {
    let showAlert = this.props.serviceRequests.length > 0

    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onPress}>
        <View>
          <Icon name="bars" style={styles.barsIcon} />
          { showAlert &&
            <View style={styles.badge}>
              <Icon name="exclamation" style={styles.alertIcon} />
            </View>
          }
        </View>
      </TouchableOpacity>
    )
  }
}

let select = (state) => ({
  ...state.notifications
})

let dispatch = (dispatch) => ({
  onPress: () => dispatch(toggleSidebar())
})

export default connect(select, dispatch)(SidemenuButton)
