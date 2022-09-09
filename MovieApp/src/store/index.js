import {configureStore, createSlice, combineReducers} from '@reduxjs/toolkit';
import darkTheme from '../constants/dark';
import lightTheme from '../constants/light';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
  },
  reducers: {
    setUser: (state, action) => {
      return {
        user: action.payload,
      };
    },
  },
});

const movieListSlice = createSlice({
  name: 'movieList',
  initialState: {
    movieList: [],
  },
  reducers: {
    setMovieList: (state, action) => {
      return {
        movieList: action.payload,
      };
    },
  },
});

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: lightTheme,
  },
  reducers: {
    handleLightTheme: state => {
      return {
        theme: state.theme === lightTheme ? darkTheme : lightTheme,
      };
    },
    handleDarkTheme: state => {
      return {
        theme: state.theme === darkTheme ? lightTheme : darkTheme,
      };
    },
  },
});

export const {setUser} = userSlice.actions;
export const {setMovieList} = movieListSlice.actions;
export const {handleLightTheme} = themeSlice.actions;
export const {handleDarkTheme} = themeSlice.actions;

export const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
    movieList: movieListSlice.reducer,
    theme: themeSlice.reducer,
  }),
});
