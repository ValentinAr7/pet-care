import { get, post } from './api.js'
import { clearUserData, setUserData } from '../util.js';
//import the functions


export async function login(email, password){       //receive E-mail and password

    //makes a POST request to the server's /users/login endpoint
    //passing in the email and password as data. 
    //The server responds with an object containing three properties: _id, email, and accessToken
    const { _id, email: resultEmail, accessToken} = await post('/users/login', { email, password });

    setUserData({             //The function then calls the setUserData function with these properties, 
        _id,                  //which stores them in the browser's sessionStorage.
        email: resultEmail,
        accessToken,
    })
}

export async function register(email, password){
    //makes a POST request to the server's /users/login endpoint
    //passing in the email and password as data. 
    //The server responds with an object containing three properties: _id, email, and accessToken
    const { _id, email: resultEmail, accessToken} = await post('/users/login', { email, password });

    setUserData({            //The function then calls the setUserData function with these properties,
        _id,                  //which stores them in the browser's sessionStorage.              
        email: resultEmail,
        accessToken,
    })
}


export async function logout(email, password){      //receive E-mail and password
    get('/users/logout');                           //if not match - remove user and properties
    clearUserData()
}

