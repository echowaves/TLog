'use strict';

import React, {
  PropTypes, Component, ActivityIndicatorIOS, Text, TouchableOpacity, View
} from 'react-native'
import { connect } from 'react-redux/native'

let LinkingIOS = require('LinkingIOS');
let qs = require('qs');

// Sample working url: sendaguynow://serviceRequest?id=1
const CUSTOM_URL = 'sendaguynow://'


import { Actions } from 'react-native-router-flux'

class AppLinking extends Component {

    constructor(props, context) {
      super(props, context);
      this._processURL = this._processURL.bind(this);
    }

    componentDidMount() {
       var url = LinkingIOS.popInitialURL();
       if (url) {
         this._processURL({url});
       }
      LinkingIOS.addEventListener('url', this._processURL);
    }

    componentWillUnmount() {
      LinkingIOS.removeEventListener('url', this._processURL);
    }

    _processURL(e) {
      var url = e.url.replace(CUSTOM_URL, '').split('?');
      var path = url[0];
      var params = url[1] ? qs.parse(url[1]) : null;

      switch(path.toLowerCase()) {
        case 'servicerequest': return this._redirectToShowServiceRequest(params)
        default: Actions.launch()
      }
    }

    _redirectToShowServiceRequest(params) {
      let request = this.props.serviceRequests[params.id]
      if (request) {
        return Actions.showRequest({ request })
      } else {
        return Actions.launch()
      }
    }

    render() {
      return null
    }
}


const select = (state) => ({
  serviceRequests: state.serviceRequests
})

export default connect(select)(AppLinking)
