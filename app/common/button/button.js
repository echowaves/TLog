'use strict';

import React from 'react-native'
import {Style, BUTTON_UNDERLAY_COLOR, BUTTON_DISABLED_COLOR} from './button__style.js'
import Icon from 'react-native-vector-icons/FontAwesome'

let {
  Text,
  View,
  TouchableHighlight,
} = React;


let viewStyle = (name) => {
  switch(name) {
    case 'danger': return Style.viewDanger
    case 'plain': return Style.viewPlain
    case 'quiet': return Style.viewQuiet
    default: return null
  }
}

let viewTextStyle = (name) => {
  switch(name) {
    case 'danger': return Style.viewDangerText
    case 'plain': return Style.viewPlainText
    case 'quiet': return Style.viewQuietText
    default: return null
  }
}

let sizeStyle = (name) => {
  switch(name) {
    case 'm': return Style.sizeM
    case 's': return Style.sizeS
    case 'l': return Style.sizeL
    default: return null
  }
}

let sizeTextStyle = (name) => {
  switch(name) {
    case 'm': return Style.sizeMText
    case 's': return Style.sizeSText
    case 'l': return Style.sizeLText
    default: return null
  }
}


export default React.createClass({
  getDefaultProps(){
    return {
      disableWith: 'Please wait...',
      visible: true,
      size: 'm'
    }
  },

  render() {
    let { text, block, icon, iconStyle, ...others } = this.props

    var touchableProps = this._computeTouchableProps()

    let btnStyle = [
      Style.button,
      block && Style.buttonBlock || null,
      viewStyle(this.props.view),
      sizeStyle(this.props.size),
      this.props.disabled && Style.buttonDisabled
    ]

    let btnTextStyle = [
      Style.buttonText,
      viewTextStyle(this.props.view),
      sizeTextStyle(this.props.size)
    ]

    if( this.props.visible ){
      return (
        <TouchableHighlight {...others} {...touchableProps} style={btnStyle} >
          <View style={Style.buttonWithIcon}>
            {icon && this.renderIcon(icon, iconStyle)}
            <Text style={btnTextStyle}>{ this._computeText(text) }</Text>
          </View>
        </TouchableHighlight>
      )
    } else {
      return null;
    }
  },

  _computeText(text) {
    return this.props.disabled
      ? this.props.disableWith
      : text

  },

  _computeTouchableProps() {
     if (this.props.disabled) {
       return {
         activeOpacity: 1,
         underlayColor: BUTTON_DISABLED_COLOR,
         onPress: null,
         onPressIn: null,
         onPressOut: null,
         onLongPress: null,
       }
     }
     return { activeOpacity: 0.2, underlayColor: BUTTON_UNDERLAY_COLOR };
   },

  renderIcon(icon, iconStyle) {
    return (<Icon name={icon} style={[Style.icon, iconStyle]} />)
  }

});
