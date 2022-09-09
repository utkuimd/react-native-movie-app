import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Filter from '../../../../components/Home/Filter';
import Movielist from '../../../../components/Home/Movielist';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styles from './Home.style';

const Home = () => {
  const movieList = useSelector(state => state.movieList);
  // eslint-disable-next-line prettier/prettier
  const renderMovies = ({item}) => <Movielist movie={item} gotoDetails={goToDetails} />;
  const navigation = useNavigation();

  const goToDetails = id => {
    navigation.navigate('DetailScreen', {id: id});
  };

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
