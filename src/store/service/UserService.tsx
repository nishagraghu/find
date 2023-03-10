import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {URL} from './env'

interface VerifyOtpPayload {
  mobilenumber: string;
  otp: string;
}
export const sendOtp = createAsyncThunk('users/fetchUser', async (mobilenumber: string) => {
  const postData = { mobilenumber };
  
  try {
   
    const response = await axios.post(`${URL}/auth/create`, postData, {
      headers: {
        Accept: 'application/json',
      },
    });
  // console.log(response);
  
    return response.data;
  } catch (error) {
    throw new Error('error ');
  }
});

export const vatifyOtp = createAsyncThunk('users/vatifyOtp', async (payload: VerifyOtpPayload ) => {
  const postData = { mobilenumber: payload.mobilenumber, otp: parseInt(payload.otp) };
 
  try {
  
    const response = await axios.post(`${URL}/auth/login`, postData, {
      headers: {
        Accept: 'application/json',
      },
    });
   
    
    return response.data;
  } catch (error) {
    
    // console.log(error.message);
    throw new Error('error ');
  }
});
