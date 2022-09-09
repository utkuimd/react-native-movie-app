import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightBox: {
    width: '40%',
    height: '20%',
    borderRadius: 15,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkBox: {
    width: '40%',
    height: '20%',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightBox_text: {
    fontSize: 44,
    fontWeight: 'bold',
    color: 'black',
  },
  darkBox_text: {
    fontSize: 44,
    fontWeight: 'bold',
    color: 'white',
  },
});
