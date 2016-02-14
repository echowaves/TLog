'use strict';

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    // marginTop:
  },

  loginTitleContainer: {
    paddingTop: 70,
    paddingBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },

  headerText: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  credentialsInputs: {
    flex: 5,
  },

  textInput:  {
    borderColor: '#19BAFF',
    backgroundColor: '#FEFEFE',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    height: 40,
    borderWidth: 1
  },
  errorText:  {
    color: 'red'
  },

  primaryBtn: {
    color: '#19BAFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  }
});
