import React, { PropTypes, Text, View, Image, ScrollView, Component } from 'react-native'

import { ScreenStyle } from '../../ios/screen'
import Style from './about-screen__style.js'


class AboutScreen extends Component {

  render() {
    return (
      <ScrollView style={[ScreenStyle.screen, Style.screen]}>
        <Text style={Style.titleText}> About Trade Log</Text>

        <View style={Style.textContainer}>
          <Text style={Style.paragragh}>
            Petierunt uti sibi concilium totius Galliae in diem certam indicere. Sed haec quis possit intrepidus aestimare tellus. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Sed haec quis possit intrepidus aestimare tellus.
          </Text>
        </View>
      </ScrollView>
    )
  }

}

export default AboutScreen
