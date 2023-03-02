import {createSlice} from '@reduxjs/toolkit';
import {intialStateApp} from '../state/AppState';
import {AppType} from  '../../types/AppType';
import {sendOtp} from '../service/UserService'
//Auth slice for user login and log out feature
const authSlice = createSlice({
  name: 'userAuth',
  initialState: intialStateApp,
  reducers: {
    // setSignIn: (state: AppType, action:{payload: {email: string, isLoggedIn: boolean, userName: string}}) => {
    //   state.email = action.payload.email;
    //   state.isLoggedIn = action.payload.isLoggedIn;
    //   state.userName = action.payload.userName;
    // },
    // setSignOut: (state: AppType) => {
    //   state.email = '';
    //   state.userName = '';
    //   state.isLoggedIn = false;
    // },
  },
  extraReducers: builder => {
    builder.addCase(sendOtp.pending, state => {
      state.isLoggedIn = true;
    });
    builder.addCase(sendOtp.fulfilled, state => {
      state.isLoggedIn = true;
    });
    builder.addCase(sendOtp.rejected, state => {
      state.isLoggedIn = true;
    });
    
  },
});

// export const {setSignIn, setSignOut} = authSlice.actions;
export default authSlice.reducer;