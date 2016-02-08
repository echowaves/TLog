'use strict';

import React from 'react-native'
import Style from './form__style.js'

let {
  Text,
  TextInput,
  View,
} = React;

export default React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    onChange: React.PropTypes.func,
    keyboardType: React.PropTypes.string,
    onFocus: React.PropTypes.func
  },

  render() {
    var { label, onChange, ...other } = this.props;
    return (
      <View style={Style.input}>
        <View style={Style.inputLabelCol}>
          <Text style={[Style.inputLabel, Style.inputLabelPrepend]}>
            {label}
          </Text>
        </View>
        <View style={Style.inputFieldCol}>
          <TextInput {...other} style={Style.inputField} onChangeText={onChange} />
        </View>
      </View>
    )
  },

});
