import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  userDetail: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  username: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
  email: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  settingsButtons_div: {
    width: '80%',
    height: Dimensions.get('window').height / 4,
    justifyContent: 'space-evenly',
  },
  settingsButton: {
    width: '100%',
    height: '40%',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  settingsButton_text: {
    color: 'white',
    fontSize: 24,
  },
  logoutButton: {
    width: '80%',
    height: 70,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
