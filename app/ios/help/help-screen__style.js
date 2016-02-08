'use strict';

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  screen: {
    paddingTop: 0,
    paddingHorizontal: 0,
  },

  helpList: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },

  helpButton: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 60,
    borderColor: '#D3D3D3',
    backgroundColor: 'white',
    borderBottomWidth: 1,
  },

  helpLink: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  helpLinkText: {
    flex: 1,
    color: "#5F5F5F",
    fontSize: 16,
  },

  icon: {
    color: '#000000',
    fontSize: 20
  },

});
