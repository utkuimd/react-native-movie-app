import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'orange',
    fontSize: 32,
    fontWeight: 'bold',
    width: '80%',
    marginBottom: 20,
    marginLeft: 20,
  },
  getInformation: {
    width: '80%',
    height: '8%',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'orange',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  getInformationArea: {
    width: '95%',
    height: '80%',
    paddingLeft: 10,
  },
  inputText: {
    fontSize: 20,
    color: 'orange',
  },
  editButton: {
    width: '80%',
    height: '8%',
    backgroundColor: 'orange',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  editButton_text: {
    fontSize: 20,
    color: 'white',
  },
});
