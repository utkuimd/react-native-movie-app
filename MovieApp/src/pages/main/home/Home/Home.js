import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Filter from '../../../../components/Home/Filter';
import Movielist from '../../../../components/Home/Movielist';
import {useSelector} from 'react-redux';
import styles from './Home.style';

const Home = () => {
  const movieList = useSelector(state => state.movieList);
  const renderMovies = ({item}) => <Movielist movie={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movieList.movieList.results}
        renderItem={renderMovies}
        ListHeaderComponent={<Filter />}
      />
    </SafeAreaView>
  );
};

export default Home;
