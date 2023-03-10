import { createSlice } from '@reduxjs/toolkit';
import { intialStateApp } from '../state/AppState';
import { AppType } from '../../types/AppType';
import { sendOtp, vatifyOtp } from '../service/UserService';
import { save, getValueFor, removeValue } from '../service/secure-store-utils';



//Auth slice for user login and log out feature
const authSlice = createSlice({
  name: 'userAuth',
  initialState: intialStateApp,
  reducers: {
    setSignIn: (state: AppType, action: { payload: { jwt: string ,mobilenumber: string} }) => {
      state.jwt = action.payload.jwt;
      state.phonnumber= action.payload.mobilenumber;

      state.isLoggedIn = false;


    },
    setSignOut: (state: AppType) => {

      state.jwt = '';
      state.phonnumber = '';
      state.isLoggedIn = false;
     
      removeValue('jwt')
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
      save('jwt',action.payload.jwt);
      save('mobilenumber',action.payload.mobilenumber);
    
      const { jwt, mobilenumber } = action.payload;
      return  state = { ...state, jwt, phonnumber: mobilenumber, isLoggedIn: false }; 
     


    });
    builder.addCase(vatifyOtp.rejected, (state, action) => {
    
      state.isLoggedIn = true;
    });



  },
});

export const { setSignIn, setSignOut } = authSlice.actions;
export default authSlice.reducer;