'use strict'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  screen: {
    paddingTop: 0,
    paddingHorizontal: 0,
  },

  titleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 5,
    marginTop: 5
  },

  textContainer: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    backgroundColor: 'white',
    paddingVertical: 10
  },

  paragragh: {
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    flex: 1
  },

})
