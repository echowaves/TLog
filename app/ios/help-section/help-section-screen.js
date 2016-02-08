import React, { Text, View, ScrollView, Component } from 'react-native'

import { ScreenStyle } from '../../ios/screen'
import Style from './help-section-screen__style.js'

class HelpSectionScreen extends Component {

  render() {
    return (
      <ScrollView style={ScreenStyle.screen}>
        <Text style={Style.titleText}> {this.props.title} </Text>

        <View style={Style.textContainer}>
          <Text style={Style.paragraph}>
            {this.props.text}
          </Text>
        </View>
      </ScrollView>
    )
  }

}

export default HelpSectionScreen
