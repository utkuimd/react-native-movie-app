import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Movielist.style';

const Movielist = ({movie}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.moviePoster}
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
      />
      <View style={styles.body}>
        <View>
          <Text style={styles.title}>{movie.title}</Text>
          <Text numberOfLines={4} style={styles.overview}>{movie.overview}</Text>
        </View>
        <Text style={styles.average}>{movie.vote_average} / 10</Text>
      </View>
    </View>
  );
};

export default Movielist;
