import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#D2D9E2',
  },

  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#363636',
    flexDirection: 'column'
  },

  header: {
    paddingTop: 26,
    backgroundColor: '#16ABE4',
    alignSelf: 'stretch',
    paddingHorizontal: 16,
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  close: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginTop: 2,

    color: 'white'
  },

  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  menuContainer: {
    alignSelf: 'stretch',
    padding: 8,
  },

  menuItem: {
    alignSelf: 'stretch',
    padding: 8,
    justifyContent: 'flex-start',
    flexDirection: 'row'

  },

  menuItemButton: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuItemIcon: {
    color: 'white',
    fontSize: 20,
    marginRight: 10,
    width: 20,
  },

  menuItemText: {
    color: 'white',
    fontSize: 20,
  },

  badge: {
    borderRadius: 12,
    width: 34,
    height: 24,
    backgroundColor: '#111',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  badgeCount: {
    color: 'white',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    width: 20,
    height: 20,
    textAlign: 'center'
  },

  horizontalLine: {
    marginTop: 12,
    marginBottom: 12,
    marginHorizontal: 12,
    flex: 1,
    borderColor: 'white',
    borderWidth: 1
  }

});
