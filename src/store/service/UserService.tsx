import {createAsyncThunk} from '@reduxjs/toolkit';
// import {HomeType} from '../types/HomeType';
//Api calling for fetching user list
export const sendOtp = createAsyncThunk('users/fetchUser', async (phonnumber : string) => {
 const postData ={ phonnumber } 
  
  const response = await fetch('https://d167-2406-7400-92-ce8f-a964-d50f-1026-a5e6.in.ngrok.io/auth/create', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: JSON.stringify(postData)
  }).catch();
  return (await response.json()) ;
});