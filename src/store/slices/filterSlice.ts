import { createSlice } from '@reduxjs/toolkit';
import { intialuserFilterInfoStateApp } from '../state/AppState';
import { FilterType } from '../../types/AppType';
import { getSearchList, getModelList, getYearRange ,getVariant } from '../service/FilterService'
import { save, getValueFor, removeValue } from '../service/secure-store-utils';



//Auth slice for user login and log out feature
const filterInfo = createSlice({
  name: 'filterInfo',
  initialState: intialuserFilterInfoStateApp,
  reducers: {
    setFilter: (state: FilterType, action: {
      payload: {
        field: string, value: {
          id?: number,
          value: string,
          logo?: string
        }
      }
    }) => {
      let data = {};
      if(action.payload.field=='selectedbroand'){
         data = {
          "selectedModel":{
            "id":0,
            "value": '',
            
           },
           "selectedyearofmake":{
            "id" : 0,
            "value" : ''
            
           },
           "selectedvariant": {
            "id": 0,
            "value": '',
          },
        }
      }else if(action.payload.field=='selectedModel'){
        data = {
           "selectedyearofmake":{
            "id" : 0,
            "value" : ''
            
           },
           "selectedvariant": {
            "id": 0,
            "value": '',
          },
        }
      }else if(action.payload.field=='selectedyearofmake'){
        data = {
         
          "selectedvariant": {
           "id": 0,
           "value": '',
         },
       }
      }
      
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        ...data
      }

    },

  },
  extraReducers: builder => {
    builder.addCase(getSearchList.pending, state => {
      return {
        ...state,
        loading: true

      }
    });
    builder.addCase(getSearchList.fulfilled, (state, action) => {
      return {
        ...state,
        brands: action.payload,
        loading: false

      }
    });
    builder.addCase(getSearchList.rejected, (state, action) => {
      return {
        ...state,
        loading: false
      }
    });

    // getModelList  
    builder.addCase(getModelList.pending, state => {
      return {
        ...state,
        loading: true
      }
    });
    builder.addCase(getModelList.fulfilled, (state, action) => {
      return {
        ...state,
        models: action.payload,
        loading: false
      }
    });
    builder.addCase(getModelList.rejected, (state, action) => {
      return {
        ...state,
        loading: false
      }
    });


    // getYearRange  
    builder.addCase(getYearRange.pending, state => {
      return {
        ...state,
        loading: true
      }
    });
    builder.addCase(getYearRange.fulfilled, (state, action) => {
      return {
        ...state,
        yearofmakes: action.payload,
        loading: false
      }
    });
    builder.addCase(getYearRange.rejected, (state, action) => {
      return {
        ...state,
        loading: false
      }
    });
    // getVariant
    builder.addCase(getVariant.pending, state => {
      return {
        ...state,
        loading: true
      }
    });
    builder.addCase(getVariant.fulfilled, (state, action) => {
      return {
        ...state,
        variants: action.payload,
        loading: false
      }
    });
    builder.addCase(getVariant.rejected, (state, action) => {
      return {
        ...state,
        loading: false
      }
    });



  },
});

export const { setFilter } = filterInfo.actions;
export default filterInfo.reducer;