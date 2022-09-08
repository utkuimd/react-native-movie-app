import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Movielist from '../../../../components/Home/Movielist';
import Searchbar from '../../../../components/Search/Searchbar';
import styles from './Search.style';

const Search = () => {
  const movieList = useSelector(state => state.movieList);
  const renderMovieList = ({item}) => <Movielist movie={item} />;
  // eslint-disable-next-line prettier/prettier
  const [filteredMovieList, setFilteredMovieList] = useState(movieList.movieList.results);
  const [bool, setBool] = useState(true);

  useEffect(() => {
    setFilteredMovieList(movieList.movieList.results);
  }, [movieList.movieList.results]);

  useEffect(() => {
    if (filteredMovieList === null) {
      setBool(false);
    } else {
      setBool(true);
    }
  }, [filteredMovieList]);

  const HandleSearch = text => {
    const filteredList = movieList.movieList.results.filter(movie => {
      const searchedText = text.toLowerCase();
      const currentTitle = movie.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setFilteredMovieList(filteredList);
    console.log(bool);
  };

  const nullList = () => {
    return (
      <View style={styles.nullArea}>
        <View style={styles.nullList}>
          <Text style={styles.nullList_text}>Couldn't find any Movie!</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar handleSearch={HandleSearch} />
      {bool ? (
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
