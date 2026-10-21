/**
 * Redux Store Configuration
 * 
 * If using Redux Toolkit, install:
 * npm install @reduxjs/toolkit react-redux
 */

// Example structure with Redux Toolkit:
/*
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
*/

// Standalone lightweight initial state setup (ready to connect with Redux Toolkit):
export const initialReduxState = {
  user: null,
  isAuthenticated: false,
};
