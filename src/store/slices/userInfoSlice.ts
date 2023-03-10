import { createSlice } from '@reduxjs/toolkit';
import { intialuserInfoStateApp } from '../state/AppState';
import { UserInfoType  } from '../../types/AppType';
import { sendOtp, vatifyOtp } from '../service/UserService';
import { save, getValueFor, removeValue } from '../service/secure-store-utils';



//Auth slice for user login and log out feature
const userInfo = createSlice({
  name: 'userInfo',
  initialState: intialuserInfoStateApp,
  reducers: {
    setUserInfo: (state: UserInfoType, action: { payload: { name: string ,email: string} }) => {
     const  name = action.payload.name;
     const  email = action.payload.email;
    //   state.phonnumber= action.payload.mobilenumber;

    //   state.isLoggedIn = false;
    return {...state,name,email }


    },
    
      
    updateForm : (state: UserInfoType, action: { payload: { field: string ,value: string} }) => {
   
        return {
            ...state,
            [action.payload.field]: action.payload.value,
          };
    // setSignOut: (state: AppType) => {

    //   state.jwt = '';
    //   state.phonnumber = '';
    //   state.isLoggedIn = false;
     
    //   removeValue('jwt')
    // },
  },




    
    // setSignOut: (state: AppType) => {

    //   state.jwt = '';
    //   state.phonnumber = '';
    //   state.isLoggedIn = false;
     
    //   removeValue('jwt')
    // },
  },
  extraReducers: builder => {
    // builder.addCase(sendOtp.pending, state => {
    //   state.isLoggedIn = true;


    // });
    // builder.addCase(sendOtp.fulfilled, (state, action) => {
  
    //   // state.isLoggedIn = true;



    // });
    // builder.addCase(sendOtp.rejected, (state, action) => {


    //   state.isLoggedIn = true;
    // });
    // builder.addCase(vatifyOtp.pending, state => {
    //   state.isLoggedIn = true;


    // });
    // builder.addCase(vatifyOtp.fulfilled, (state, action) => {
    //   save('jwt',action.payload.jwt);
    //   save('mobilenumber',action.payload.mobilenumber);
    
    //   const { jwt, mobilenumber } = action.payload;
    //   return  state = { ...state, jwt, phonnumber: mobilenumber, isLoggedIn: false }; 
     


    // });
    // builder.addCase(vatifyOtp.rejected, (state, action) => {
    //   console.log('rejected');
    //   state.isLoggedIn = true;
    // });



  },
});

export const { updateForm } = userInfo.actions;
export default userInfo.reducer;