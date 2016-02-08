import React, { Text, View, ScrollView, Component } from 'react-native'

import { ScreenStyle } from '../../ios/screen'
import Style from './terms-of-use-screen__style.js'

export default class HelpChargeScreen extends Component {

  render() {
    return (
      <ScrollView style={ScreenStyle.screen}>
        <Text style={Style.titleText}> Terms of use </Text>

        <View style={Style.textContainer}>
          <Text style={Style.paragragh}>
            Petierunt uti sibi concilium totius Galliae in diem certam indicere. Sed haec quis possit intrepidus aestimare tellus. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Sed haec quis possit intrepidus aestimare tellus.
          </Text>
        </View>
      </ScrollView>
    )
  }

}
