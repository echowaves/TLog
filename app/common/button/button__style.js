'use strict';

import { StyleSheet } from 'react-native'

export const BUTTON_UNDERLAY_COLOR = "RGBA(38, 172, 227, .5)"
export const BUTTON_DISABLED_COLOR = "#8F8F8F"

export let Style = StyleSheet.create({

  button: {
    margin: 2,
    backgroundColor: '#16ABE4',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },

  buttonDisabled: {
    backgroundColor: BUTTON_DISABLED_COLOR,
  },

  buttonBlock: {
    flex: 1,
  },

  buttonText: {
    color: 'white',
  },

  icon: {
    color: 'white',
    fontSize: 20,
    marginRight: 10,
  },

  buttonWithIcon: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  sizeL: {
  },

  sizeLText: {
    fontSize: 19,
    paddingVertical: 16,
  },

  sizeM: {
  },

  sizeMText: {
    fontSize: 16,
    paddingVertical: 13,
  },

  sizeS: {
  },

  sizeSText: {
    paddingVertical: 10,
    fontSize: 15,
  },


  viewDanger: {
    backgroundColor: '#C1272B',
  },

  viewPlain: {
    backgroundColor: 'transparent'
  },

  viewPlainText: {
    color: '#444444'
  },

  viewQuiet: {
    backgroundColor: 'transparent'
  },

  viewQuietText: {
    color: '#8F8F8F'
  },


})
