// import * as api from './api/user.js'        //import *all items 
// window.api = api      //assign the imported module object to the global object

import {page, render } from './lib.js'

page('/', () => console.log('home'));
page('/catalog', () => console.log('catalog'));
page('/catalog/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/create', () => console.log('create'));
page('/register', () => console.log('register'));
page('/login', () => console.log('login'));




