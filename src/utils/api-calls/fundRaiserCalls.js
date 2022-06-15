
import {server} from '../fetch';

export const fetchFundRaiser = async() =>{
   

    const res2 = await fetch(`${server}/fundRaiser`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const fundRaiser = await res2.json()

   

 return fundRaiser
}