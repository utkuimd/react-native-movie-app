import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Searchbar.style';
import IconFeather from 'react-native-vector-icons/Feather';

const Searchbar = ({handleSearch}) => {
  return (
    <View style={styles.searchBarArea}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Search..."
          placeholderTextColor="white"
          onChangeText={handleSearch}
        />
      </View>
      <IconFeather
        name="arrow-right-circle"
        size={35}
        color="white"
        onPress={null}
      />
    </View>
  );
};

export default Searchbar;
