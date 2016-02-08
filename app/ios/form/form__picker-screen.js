'use strict';

import React from 'react-native'

import { Actions } from 'react-native-router-flux'
import { ScreenStyle } from '../../ios/screen'
import Button from '../../common/button'

import { findById } from './form__utils.js'
import Style from './form__style.js'

let {
  StyleSheet,
  PickerIOS,
  Text,
  View,
  TouchableHighlight,
} = React;


let PickerItemIOS = PickerIOS.Item;

export default React.createClass({

  propTypes: {
    selectedValue: React.PropTypes.number,
    items: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    getCaption: React.PropTypes.func.isRequired,
    getId: React.PropTypes.func.isRequired,
  },

  getInitialState(){
    return {
      selectedValue: this.props.selectedValue
        || this.props.items.length > 0 && this.props.getId(this.props.items[0])
    }
  },

  getDefaultProps(){
    return {
      getId: (v) =>  v.id,
      getCaption: (v) =>  v.name
    }
  },

  render() {
    if(this.props.items.length > 0 ){
    return (
      <View style={ScreenStyle.screen}>
        <PickerIOS style={styles.picker}
          selectedValue={this.state.selectedValue}
          onValueChange={(val) => this.setState({selectedValue: val})}>
          {
            this.props.items.map((item) => (
              <PickerItemIOS
                key={this.props.getId(item)}
                value={this.props.getId(item)}
                label={this.props.getCaption(item)}
              />))
          }
        </PickerIOS>
        <Button text="Done" onPress={this._done} />
      </View>
    );
    } else {
      return (
      <View style={ScreenStyle.screen}>
        <Text style={Style.noItemsText}> No items </Text>
        <Button text="Back" onPress={this._back} />
      </View>
      )
    }
  },

  _done() {
    this.props.onChange(this.state.selectedValue)
    Actions.pop()
  },

  _back() {
    Actions.pop()
  }

});

let styles = StyleSheet.create({
  picker: {
    flex: 1,
    justifyContent: 'center',
  }
})
