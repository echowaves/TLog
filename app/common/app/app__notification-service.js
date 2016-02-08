import _ from 'lodash'
import React, { Component, PropTypes } from 'react-native'
import { connect } from 'react-redux/native'
import { addRequestNotification } from '../../common/actions'

class AppNotificationService extends Component {

  componentWillReceiveProps(props) {
    _.values(props.serviceRequests).map((request) => {
      let prev = this.props.serviceRequests[request.id]
      if( prev && prev.status != request.status) {
        this.props.onAddRequestNotification(request.id, request.isActive)
      }
    })
  }

  render() {
    return null
  }
}

AppNotificationService.propTypes = {
  serviceRequests: PropTypes.object.isRequired,
}

let select = (state) => ({
  serviceRequests: state.serviceRequests,
})

let dispatch = (dispatch) => ({
  onAddRequestNotification: (id, isActive) => dispatch(addRequestNotification(id, isActive))
})

export default connect(select, dispatch)(AppNotificationService)
