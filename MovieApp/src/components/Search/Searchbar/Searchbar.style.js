import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  searchBarArea: {
    width: '90%',
    height: Dimensions.get('window').height / 14,
    backgroundColor: 'orange',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  inputContainer: {
    width: '80%',
    height: '80%',
    paddingLeft: 10,
  },
  inputText: {
    fontSize: 20,
    color: 'white',
  },
});
