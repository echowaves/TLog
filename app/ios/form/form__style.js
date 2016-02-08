'use strict';

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  form: {
    alignSelf: 'stretch',
    backgroundColor: '#F5FCFF',
    borderColor: '#D3D3D3',
    borderWidth: 1,
  },

  input: {
    height: 40,
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: 8,
    backgroundColor: 'white',
    borderColor: '#D3D3D3',
    borderBottomWidth: 1,
  },

  inputLabelCol: {
    width: 120,
    alignSelf: 'center',
    paddingHorizontal: 8,
  },

  inputLabel: {
    color: '#525252',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 4,
  },

  inputLabelPrepend: {
    alignSelf: 'flex-end',
  },

  inputFieldCol: {
    flex: 1,
    alignSelf: 'center',
    paddingHorizontal: 8,
  },

  inputField: {
    height: 30,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  value: {
    fontSize: 16,
  },

  inputCustomBtn: {
    width: 30,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formGroup: {
    flex: 1,
    alignSelf: 'stretch',
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: 'white',
    marginBottom: 4,
  },

  formGroupPlain: {
    backgroundColor: 'transparent'
  },

  formGroupInline: {
    flexDirection: 'row',
  },

  inputMultilineField: {
    height: 100,
    alignSelf: 'stretch',
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#C7C8C7',
    borderRadius: 3,
    paddingHorizontal: 8,
  },

  noItemsText: {
    fontSize: 16,
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  placeholder: {
    fontSize: 16,
    color: '#C7C7CD',
  },

});

