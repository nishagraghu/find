import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {URL} from './env';
import { getValueFor} from './secure-store-utils';

import api from './api';
interface VerifyOtpPayload {
  mobilenumber: string;
  otp: string;
}

interface brantPayload {
  brantId:number 
}
interface ModelPayload {
  ModelId:number 
}
interface YearIdPayload {
  YearId:number 
}
interface VariantIdPayload {
  VariantId:number 
}

export const getSearchList = createAsyncThunk('filterInfo/fetchBrand', async () => {
   return  await api('brants')
});
export const getModelList= createAsyncThunk('filterInfo/fetchModel', async (payload: brantPayload) => {
  const brantId   =payload.brantId;
  return  await api(`modeinfo/${brantId}`)
});
export const getYearRange= createAsyncThunk('filterInfo/fetchYearRange', async (payload: ModelPayload) => {
  const ModelId   =payload.ModelId;
  return  await api(`yearofmake/${ModelId}`)
});
export const getVariant= createAsyncThunk('filterInfo/fetchVariant', async (payload: YearIdPayload) => {
  const YearId   =payload.YearId;
   
  return  await api(`variants/${YearId}`)
});

export const getParts= createAsyncThunk('filterInfo/fetchParts', async (payload: VariantIdPayload) => {
  const VariantId   =payload.VariantId;
   
  return  await api(`variants/${VariantId}`)
});


// export const vatifyOtp = createAsyncThunk('users/vatifyOtp', async (payload: VerifyOtpPayload ) => {
//   const postData = { mobilenumber: payload.mobilenumber, otp: parseInt(payload.otp) };
 
//   try {
  
//     const response = await axios.post(`${URL}/auth/login`, postData, {
//       headers: {
//         Accept: 'application/json',
//       },
//     });
   
    
//     return response.data;
//   } catch (error) {
    
//     // console.log(error.message);
//     throw new Error('error ');
//   }
// });
