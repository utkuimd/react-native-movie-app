import {configureStore, createSlice, combineReducers} from '@reduxjs/toolkit';

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

const searchMovieSlice = createSlice({
  name: 'searchMovie',
  initialState: {
    searchMovie: [],
  },
  reducers: {
    setSearchMovie: (state, action) => {
      return {
        searchMovie: action.payload,
      };
    },
  },
});

export const {setUser} = userSlice.actions;
export const {setMovieList} = movieListSlice.actions;
export const {setSearchMovie} = searchMovieSlice.actions;

export const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
    movieList: movieListSlice.reducer,
    searchMovie: searchMovieSlice.reducer,
  }),
});
