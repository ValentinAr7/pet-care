import { get, post } from './api.js'
import { clearUserData, setUserData } from '../util.js';

export async function login(email, password){       //receive E-mail and password
    const { _id, email: resultEmail, accessToken} = await post('/users/login', { email, password });

    setUserData({                       //set user data properties
        _id,
        email: resultEmail,
        accessToken,
    })
}

export async function register(email, password){
    const { _id, email: resultEmail, accessToken} = await post('/users/login', { email, password });

    setUserData({                       //set user data properties
        _id,                            
        email: resultEmail,
        accessToken,
    })
}


export async function logout(email, password){      //receive E-mail and password
    get('/users/logout');                           //if not match - remove user and properties
    clearUserData()
}

