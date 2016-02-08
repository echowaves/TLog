'use strict';

import React from 'react-native'
import Style from './form__style.js'
import { Actions } from 'react-native-router-flux'

import FormPickerScreen from './form__picker-screen.js'
import FormTextInput from './form__text-input.js'
import { findById } from './form__utils.js'

let {
  Text,
  TouchableHighlight,
  TextInput,
  View,
} = React;

export default React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    selectedValue: React.PropTypes.number,
    customValue: React.PropTypes.string,
    items: React.PropTypes.array.isRequired,
    allowCustom: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    customPlaceholder: React.PropTypes.string,
    onChange: React.PropTypes.func,
    getCaption: React.PropTypes.func,
    getId: React.PropTypes.func,
    onFocus: React.PropTypes.func,
  },

  contextTypes: {
    navigator: React.PropTypes.object
  },

  getDefaultProps(){
    return {
      getId: (v) => v.id,
        getCaption: (v) => v.name
    }
  },

  render() {
    if(this.props.allowCustom){
      return this.renderCustomField()
    } else {

      let text = this.props.placeholder
      let textStyle = Style.placeholder

      if (this.props.selectedValue) {
        selectedItem = findById(this.props.items, this.props.selectedValue, this.props.getId)

        if(selectedItem) {
          text = this.props.getCaption(selectedItem)
          textStyle = Style.value
        }
      }

      return (
        <View style={Style.input}>
          <View style={Style.inputLabelCol}>
            <Text style={[Style.inputLabel, Style.inputLabelPrepend]}>
              {this.props.label}
            </Text>
          </View>
          { this.renderField(text, textStyle) }
        </View>
      )
    }
  },

  renderField(text, textStyle){
    if(this.props.items.length > 0) {
      return (
        <View style={Style.inputFieldCol}>
          <TouchableHighlight style={Style.inputField} onPress={this._pickValue}>
            <Text style={textStyle}>
              { text }
            </Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      return (
        <View style={Style.inputFieldCol}>
          <View style={Style.inputField}>
            <Text style={Style.placeholder}>
              No items to select
            </Text>
          </View>
        </View>
      )
    }
  },

  renderCustomField(){
    let text = this.props.customValue
    let selectedItem = null

    if (this.props.selectedValue) {
      selectedItem = findById(this.props.items, this.props.selectedValue, this.props.getId)

      if(selectedItem) {
        text = this.props.getCaption(selectedItem)
      }
    }

    return (
      <View style={Style.input}>
        <View style={Style.inputLabelCol}>
          <Text style={[Style.inputLabel, Style.inputLabelPrepend]}>
            {this.props.label}
          </Text>
        </View>
        <View style={Style.inputFieldCol}>
          <TextInput
            style={Style.inputField}
            placeholder={this.props.customPlaceholder}
            onChangeText={(text) => this.props.onChange({custom: text, selected: null})}
            value={text}
            onFocus={this.props.onFocus}
          />
        </View>
        { this.renderCustomPicker() }
      </View>
    )
  },

  renderCustomPicker() {
    console.log(this.props.items)
    if(this.props.items.length > 0) {
      return (
        <TouchableHighlight style={Style.inputCustomBtn} onPress={this._pickValue}>
          <Text> > </Text>
        </TouchableHighlight>
      )
    }
  },

  _pickValue(){
    Actions.pickItem({
      selectedValue: this.props.selectedValue,
      items: this.props.items,
      getCaption: this.props.getCaption,
      getId: this.props.getId,
      onChange: (value) => {
        if(this.props.allowCustom) {
          this.props.onChange({selected: value, custom: null})
        } else {
          this.props.onChange(value)
        }
      }
    })
  }
})
