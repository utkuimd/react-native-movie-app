import {configureStore, createSlice} from '@reduxjs/toolkit';

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

export const {setUser} = userSlice.actions;

export const store = configureStore({
  reducer: userSlice.reducer,
});
