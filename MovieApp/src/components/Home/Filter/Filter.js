import React from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {setMovieList} from '../../../store';
import axios from 'axios';
import styles from './Filter.style';

const Filter = () => {
  const dispatch = useDispatch();
  const getMovies = key => {
    const apiRequestLink = `https://api.themoviedb.org/3/movie/${key}?api_key=9c4dbbe40978e1aef787c52576339a4a`;
    axios
      .get(apiRequestLink, {})
      .then(response => {
        dispatch(setMovieList(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <TouchableOpacity
          style={styles.filterElementArea}
          onPress={() => getMovies('top_rated')}>
          <Text style={styles.filterElementText}>Top Rated</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterElementArea}
          onPress={() => getMovies('now_playing')}>
          <Text style={styles.filterElementText}>Now Playing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterElementArea}
          onPress={() => getMovies('popular')}>
          <Text style={styles.filterElementText}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterElementArea}
          onPress={() => getMovies('upcoming')}>
          <Text style={styles.filterElementText}>Upcoming</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Filter;
