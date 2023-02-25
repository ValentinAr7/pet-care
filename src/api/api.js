import { getUserData } from "../util.js";

const host = 'http://localhost:3030';

//make HTTP request to the server
async function request(method, url, data){  //this function receives method, path and body
    const options = {                      
        method, 
        headers: {}
    };

    //if there is data, add headers and body to the reuest 
    if(data !== undefined){       
        options.headers['Content-Type'] = 'application/json';   
        options.body = JSON.stringify(data)         //stringify the data
    }

    const user = getUserData();   //import getUserData() and store its value

    //if user is found add access token to the headers
    if(user){
        options.headers['X-Authorization'] = user.accessToken
    }

    try{
        const response = await fetch(host + url, options)   //fetch data from the server

        if(response.status == 204){  
            return response
        }

        const result = await response.json()
        
        if(response.ok == false){
            throw new Error(result.message)

        }

        return result
         
    } catch(err){
        alert(err.message);
        throw err
    }
}

//CRUD 
export const get = request.bind(null, 'get');           
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');
