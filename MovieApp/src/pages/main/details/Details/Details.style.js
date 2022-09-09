import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  moviePoster: {
    width: '100%',
    height: Dimensions.get('window').height / 3.6,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
  },
  movieDetail_div: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  movieOverview: {
    color: 'black',
    fontSize: 20,
  },
  movieDetail: {
    fontSize: 22,
    color: 'black',
    fontStyle: 'italic',
    //textDecorationLine: 'underline',
  },
});
