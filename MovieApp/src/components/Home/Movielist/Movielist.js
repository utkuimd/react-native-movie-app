import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './Movielist.style';

const Movielist = ({movie, gotoDetails}) => {
  return (
    <Pressable style={styles.container} onPress={() => gotoDetails(movie.id)}>
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
    </Pressable>
  );
};

export default Movielist;
