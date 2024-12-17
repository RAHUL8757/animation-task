import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  firstDrawer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  secondDrawer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#20201D',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    top: 10,
    borderTopLeftRadius: 20,
  },
  drawerHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    left: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  selectedItem: {
    backgroundColor: '#e08b84',
    borderRadius: 10,
    width: 120,
  },
  listItemText: {
    fontSize: 18,
    color: '#fff',
  },
  divider: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  signOutText: {
    color: '#fff',
    fontSize: 18,
  },
});
