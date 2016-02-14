import React, { Text, View, Image, ScrollView, } from 'react-native'
import { ScreenStyle } from '../../screens/screen'

import Style from './profile-screen__style.js'

export default React.createClass({
  render() {
    let {name, email, phone, photoUrl} = this.props

    return (
        <ScrollView style={[ScreenStyle.screen, Style.screen]}>
          <View style={Style.profile}>
            <Image source={photoUrl} style={Style.image} />
            <View style={Style.profileDetails}>
              <Text style={Style.profileName}>{name}</Text>
              <Text style={Style.profileDetailsText}>{email}</Text>
              <Text style={Style.profileDetailsText}>{phone}</Text>
            </View>
          </View>
        </ScrollView>
    );
  },
});
