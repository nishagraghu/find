import { createSlice } from '@reduxjs/toolkit';
import { intialStateApp } from '../state/AppState';
import { AppType } from '../../types/AppType';
import { sendOtp, vatifyOtp } from '../service/UserService';
import { save, getValueFor } from '../service/secure-store-utils';



//Auth slice for user login and log out feature
const authSlice = createSlice({
  name: 'userAuth',
  initialState: intialStateApp,
  reducers: { 
    setSignIn: (state: AppType, action:{payload: {jwt: string }}) => {
      state.jwt = action.payload.jwt;
     
      state.isLoggedIn = false;

     
    },
    setSignOut: (state: AppType) => {
      state.jwt = '';
      state.phonnumber = '';
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(sendOtp.pending, state => {
      state.isLoggedIn = true;


    });
    builder.addCase(sendOtp.fulfilled, (state, action) => {
      
      // state.isLoggedIn = true;



    });
    builder.addCase(sendOtp.rejected, (state, action) => {


      state.isLoggedIn = true;
    });
    builder.addCase(vatifyOtp.pending, state => {
      state.isLoggedIn = true;


    });
    builder.addCase(vatifyOtp.fulfilled, (state, action) => {

      const { jwt } = action.payload;
     
     save('jwt',action.payload.jwt)
    
      state.jwt = jwt
      state.isLoggedIn = false;

    });
    builder.addCase(vatifyOtp.rejected, (state, action) => {
      console.log('rejected');
      state.isLoggedIn = true;
    });



  },
});

export const {setSignIn, setSignOut} = authSlice.actions;
export default authSlice.reducer;