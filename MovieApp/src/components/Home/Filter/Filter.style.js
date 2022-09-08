import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height / 8,
    paddingRight: 15,
    paddingLeft: 5,
  },
  filterElementArea: {
    height: Dimensions.get('window').height / 14,
    width: Dimensions.get('window').width / 2.5,
    backgroundColor: 'orange',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  filterElementText: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
});
