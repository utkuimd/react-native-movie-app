import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Movielist from '../../../../components/Home/Movielist';
import Searchbar from '../../../../components/Search/Searchbar';
import styles from './Search.style';

const Search = () => {
  const movieList = useSelector(state => state.movieList);
  // eslint-disable-next-line prettier/prettier
  const renderMovieList = ({item}) => <Movielist movie={item} gotoDetails={goToDetails} />;
  // eslint-disable-next-line prettier/prettier
  const [filteredMovieList, setFilteredMovieList] = useState(movieList.movieList.results);
  const [anyMovie, setAnyMovie] = useState(true);
  const navigation = useNavigation();
  const {theme} = useSelector(state => state.theme);

  const goToDetails = id => {
    navigation.navigate('DetailScreen', {id: id});
  };

  useEffect(() => {
    setFilteredMovieList(movieList.movieList.results);
  }, [movieList.movieList.results]);

  const HandleSearch = text => {
    const filteredList = movieList.movieList.results.filter(movie => {
      const searchedText = text.toLowerCase();
      const currentTitle = movie.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setFilteredMovieList(filteredList);
    filteredList.length !== 0 ? setAnyMovie(true) : setAnyMovie(false);
  };

  const nullList = () => {
    return (
      <View style={styles.nullArea}>
        <View style={styles.nullList}>
          <Text style={[styles.nullList_text, {color: theme.color}]}>Couldn't find any Movie!</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Searchbar handleSearch={HandleSearch} />
      {anyMovie ? (
        <FlatList
          data={filteredMovieList}
          renderItem={renderMovieList}
          ListHeaderComponent={null}
        />
      ) : (
        nullList()
      )}
    </SafeAreaView>
  );
};

export default Search;
