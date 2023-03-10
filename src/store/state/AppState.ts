
import { AppType, UserInfoType } from '../../types/AppType';


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
  pincode: ''

};