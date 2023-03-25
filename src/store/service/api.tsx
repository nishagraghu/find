import { getValueFor} from './secure-store-utils';
import axios from 'axios';
import {URL} from './env';


async function  api(urlpath : string){
    try {
        const token = await getValueFor('jwt');
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          };
         
       
        const response = await axios.get(`${URL}/api/${urlpath}`, {
            headers
        });
       
    
        return response.data;
      } catch (error) {
       
        console.log(error);
      
       
        throw new Error('error ');
      }
}
export default  api;
