'use strict';

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  screen: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginTop: 64,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  locations: {
    // flex: 1,
    backgroundColor: 'white',
  },

  location: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 60,
    borderColor: '#D3D3D3',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },

  locationText: {
    // flex: 1,
    color: '#5F5F5F',
    fontSize: 16,
  },

  locationPickButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonWithIcon: {
    flexDirection: 'row',
  },

  icon: {
    color: '#16ABE4',
    fontSize: 20,
    marginRight: 10,
  },

  bigIcon: {
    fontSize: 30,
  },

  blackIcon: {
    color: '#5F5F5F',
  },

  locationPickerButton: {
    alignSelf: 'center',
    marginBottom: 10
  },

  locationAddButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationAddButtonText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#16ABE4',
    fontSize: 16,
  },

  locationPicker: {
    alignSelf: 'stretch',
    alignItems: 'stretch',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 12,
  },

  locationPickerMessage: {
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    flex: 1
  },

  locationPickerIcon: {
    marginRight: 15,
  },

  messageContainer: {
    flexDirection: 'column',
    flex: 1
  },

  pickerText: {
    color: '#5F5F5F',
    fontSize: 16,
  },

  locationPromptWithButton: {
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    flex: 1
  },

  content: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  bubbleText: {
    fontWeight: 'bold'
  },

  sendButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginVertical: 4,
    borderRadius: 4,
    backgroundColor: '#C1272B',
  },

  sendButtonText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    color: 'white'
  },

});
