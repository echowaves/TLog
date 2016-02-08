import { StyleSheet } from 'react-native'
import cssVar from 'cssVar'


export default StyleSheet.create({

  buttonContainer: {
    paddingLeft: 10,
    paddingTop: 8,
    marginRight: 10,
  },

  barsIcon: {
    fontSize: 22,
    marginRight: 10,
    color: cssVar('fbui-bluegray-60'),
    alignSelf: 'flex-start',
  },

  badge: {
    position: 'absolute',
    bottom: 0,
    right: 6,
    backgroundColor: 'red',
    width: 12,
    height: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  alertIcon: {
    fontSize: 10,
    color: 'white',
  },

})
