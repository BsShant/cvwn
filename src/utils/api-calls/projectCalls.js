
import {server} from '../fetch';

export const fetchProject = async() =>{
   

    const res2 = await fetch(`${server}/project`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const project = await res2.json()

   

 return project
}