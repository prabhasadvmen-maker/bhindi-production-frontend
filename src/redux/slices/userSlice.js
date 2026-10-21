/**
 * User Slice for Redux State Management
 * 
 * Usage with @reduxjs/toolkit:
 * import { createSlice } from '@reduxjs/toolkit';
 * 
 * export const userSlice = createSlice({
 *   name: 'user',
 *   initialState: { userInfo: null, token: null },
 *   reducers: {
 *     setUser: (state, action) => {
 *       state.userInfo = action.payload;
 *     },
 *     clearUser: (state) => {
 *       state.userInfo = null;
 *       state.token = null;
 *     },
 *   },
 * });
 * 
 * export const { setUser, clearUser } = userSlice.actions;
 * export default userSlice.reducer;
 */

export const userActions = {
  SET_USER: 'SET_USER',
  CLEAR_USER: 'CLEAR_USER',
};
