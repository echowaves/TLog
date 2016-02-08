'use strict';

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  screen: {
    padding: 0,
  },

  image: {
    width: 82,
    height: 82,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 41,
    backgroundColor: 'white',
    overflow: 'hidden',
  },

  profile: {
    marginTop: 100,
    alignItems: 'center',
  },

  profilePhoto: {
  },

  profileDetails: {
    marginTop: 30,
    alignItems: 'center'
  },

  profileName: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  profileDetailsText: {
    fontSize: 16,
    lineHeight: 22,
  },

  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    margin: 20,
    justifyContent: 'center',
  },

  modalInner: {
    borderRadius: 10,
    overflow: 'hidden',
  },

  modalTitle: {
    fontSize: 17,
    paddingVertical: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
  }

});
