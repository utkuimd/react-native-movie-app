import React from 'react';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import styles from './Details.style';

const Details = () => {
  //const chosenMovieID = props.route.params.id;
  const route = useRoute();
  const chosenMovieID = route.params.id;
  const movieList = useSelector(state => state.movieList);
  //console.log(movieList);
  //console.log(movieList.movieList.results.filter(movie => movie.id === chosenMovieID));
  const chosenMovie = movieList.movieList.results.filter(
    movie => movie.id === chosenMovieID,
  );
  const isMovieAdult = () => {
    if (chosenMovie[0].adult === true) {
      return 'Adult: Yes';
    } else {
      return 'Adult: No';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <Image
            style={styles.moviePoster}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${chosenMovie[0].backdrop_path}`,
            }}
          />
          <Text style={styles.movieTitle}>{chosenMovie[0].title}</Text>
          <View style={styles.movieDetail_div}>
            <Text style={styles.movieOverview}>{chosenMovie[0].overview}</Text>
          </View>
          <View style={styles.movieDetail_div}>
            <Text style={styles.movieDetail}>{isMovieAdult()}</Text>
            <Text style={styles.movieDetail}>
              Original Title: {chosenMovie[0].original_title}
            </Text>
            <Text style={styles.movieDetail}>
              Release Date: {chosenMovie[0].release_date}
            </Text>
            <Text style={styles.movieDetail}>
              Vote: {chosenMovie[0].vote_average} / 10
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
