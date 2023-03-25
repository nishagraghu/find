
import { AppType, UserInfoType ,FilterType } from '../../types/AppType';


//Initial state of application
export const intialStateApp: AppType = {
  phonnumber: '',
  jwt: '',

  isLoggedIn: false,

};
export const intialuserInfoStateApp: UserInfoType = {
  name: '',
  email: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  pincode: '',
  

};
export const intialuserFilterInfoStateApp: FilterType = {
  loading: false,
  selectedbroand:{
    id:0,
    value: '',
    logo: '',


   },
   selectedModel:{
    id:0,
    value: '',
    
   },
   selectedyearofmake:{
    id : 0,
    value : ''
    
   },
   selectedvariant: {
    id: 0,
    value: '',
  },

  yearofmakes:[],
   models:[],
   brands:[],
   variants:[]

};