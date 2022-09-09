import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {handleLightTheme, handleDarkTheme} from '../../../../store';
import styles from './ChangeTheme.style';

const ChangeTheme = () => {
  const {theme} = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const setLightTheme = () => {
    dispatch(handleLightTheme());
  };

  const setDarkTheme = () => {
    dispatch(handleDarkTheme());
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <TouchableOpacity style={styles.lightBox} onPress={setLightTheme}>
        <Text style={styles.lightBox_text}>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.darkBox} onPress={setDarkTheme}>
        <Text style={styles.darkBox_text}>Dark</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChangeTheme;
