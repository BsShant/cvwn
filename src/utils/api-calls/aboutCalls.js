
import {server} from '../fetch';



export const fetchAbout = async() =>{
   

    const res2 = await fetch(`${server}/about`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const about = await res2.json()

   

 return about
}

