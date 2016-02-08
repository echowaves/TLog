import React, { PropTypes, Text, View, ScrollView, TouchableOpacity, Component } from 'react-native'
import { connect } from 'react-redux/native'
import { Actions } from 'react-native-router-flux'
import { loadFaqs } from '../../common/actions'

import Icon from 'react-native-vector-icons/FontAwesome'
import { ScreenStyle } from '../../ios/screen'
import Style from './help-screen__style.js'

class HelpScreen extends Component {

  componentDidMount() {
    this.props.onLoad(this.context)
  }

  loadFaqs() {
    let faqs = this.props.faqs.map((faq) => {
      return (
        <View key={faq.id}>
          <TouchableOpacity style={Style.helpButton} onPress={ () => this._viewFaq(faq) }>
            <View style={Style.helpLink}>
              <Text style={Style.helpLinkText}> {faq.title} </Text>
              <Icon name="chevron-right" style={Style.icon} />
            </View>
          </TouchableOpacity>
        </View>
      )
    })

    return faqs
  }

  render() {
    return (
      <ScrollView style={[ScreenStyle.screen, Style.screen]}>
        <View style={Style.helpList}>
          {this.loadFaqs()}
        </View>
      </ScrollView>
    )
  }

  _viewFaq(faq) {
    Actions.helpSection({ title: faq.title, text: faq.text })
  }

}

HelpScreen.contextTypes = {
  auth: React.PropTypes.object,
  viewer: React.PropTypes.object
}

let select = (state) => ({
  faqs: state.faqs
})

let actions = (dispatch, {request}) => ({
  onLoad: (context) => {
    dispatch(loadFaqs(context))
  }
})

export default connect(select, actions)(HelpScreen)
