// import * as api from './api/user.js'        //import *all items 
// window.api = api      //assign the imported module object to the global object

import {page, render } from './lib.js'
import { showCatalog } from './views/catalog.js';
import { showHome } from './views/home.js';

const main = document.getElementById('content')     //content needs to get to all views

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/create', () => console.log('create'));
page('/register', () => console.log('register'));
page('/login', () => console.log('login'));


page.start()

function decorateContext(ctx, next){     //every time the user navigates page.js will run this function before every view
    ctx.render = renderMain;

    next()          //continue in case of async func
}

function renderMain(content){           //renders the content into const main
    render(content, main)
}



