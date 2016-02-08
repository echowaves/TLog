import _ from 'lodash'
import Config from '../../common/config'
import React, { Component, PropTypes } from 'react-native'
import { connect } from 'react-redux/native'
import { loadServiceRequests, loadServiceRequest } from '../../common/actions'

const PULLING_INTERVAL = Config.pullingInterval



class AppPullingService extends Component {
  componentDidMount() {
    // this.props.onPullServiceRequests(this.context)
    this.startPulling()
  }

  componentWillUnmount(props) {
    this.stopPulling()
  }

  startPulling(){
    console.log("start pulling")
    this.pulling = setInterval(() => {
      if(this.props.serviceRequests.length > 0) {
        this.props.onPullServiceRequests(this.context)
      }

      // Deep reload
      this.props.pullables.serviceRequests.map((id) => {
        this.props.onPullServiceRequest(this.context, id)
      })
    }, PULLING_INTERVAL)
  }

  stopPulling() {
    console.log("stop pulling")
    clearInterval(this.pulling)
  }

  render() {
    return null
  }
}

AppPullingService.propTypes = {
  serviceRequests: PropTypes.array.isRequired,
}

AppPullingService.contextTypes = {
  viewer: PropTypes.object,
  auth: PropTypes.object
}

let select = (state) => ({
  serviceRequests: _.filter(_.values(state.serviceRequests), (r) => r.isActive),
  pullables: state.pullables
})

let dispatch = (dispatch) => ({
})

export default connect(select, dispatch)(AppPullingService)
