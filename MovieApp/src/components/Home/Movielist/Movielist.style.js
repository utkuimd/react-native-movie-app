import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height / 4,
    padding: 10,
    flexDirection: 'row',
  },
  moviePoster: {
    width: '30%',
    height: '100%',
    borderRadius: 15,
  },
  body: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  overview: {
    color: 'black',
    fontSize: 16,
  },
  average: {
    color: 'gold',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
