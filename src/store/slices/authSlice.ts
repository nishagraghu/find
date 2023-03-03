import {createSlice} from '@reduxjs/toolkit';
import {intialStateApp} from '../state/AppState';
import {AppType} from  '../../types/AppType';
import {sendOtp ,vatifyOtp } from '../service/UserService';
import { save, getValueFor } from '../service/secure-store-utils';



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
      console.log('requst started');
    
    });
    builder.addCase(sendOtp.fulfilled, (state,action) => {
      console.log(action.payload);
      // state.isLoggedIn = true;
     
      console.log('requst ok');
      
    });
    builder.addCase(sendOtp.rejected, (state,action) => {
     
      console.log('requst rejected');
      console.log(action.payload);
      state.isLoggedIn = true;
    });
    builder.addCase(vatifyOtp.pending, state => {
      state.isLoggedIn = true;
      
     
    });
    builder.addCase(vatifyOtp.fulfilled, (state,action) => {
    
      const {jwt} = action.payload;
      save('jwt', jwt)
      state.isLoggedIn = true;
      
    });
    builder.addCase(vatifyOtp.rejected, (state,action) => {
      console.log(action);
      console.log('54');
      state.isLoggedIn = true;
    });

    
    
  },
});

// export const {setSignIn, setSignOut} = authSlice.actions;
export default authSlice.reducer;