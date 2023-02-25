// import * as api from './api/user.js'        //import *all items 
// window.api = api      //assign the imported module object to the global object

import { logout } from './api/user.js';
import {page, render } from './lib.js'
import { showCatalog } from './views/catalog.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';

const main = document.getElementById('content')     //content needs to get to all views
document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page('/create', () => console.log('create'));
page('/register', showRegister);
page('/login', showLogin);

updateNav()
page.start()

function decorateContext(ctx, next){     //every time the user navigates page.js will run this function before every view
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next()          //continue in case of async func
}

function renderMain(content){           //renders the content into const main
    render(content, main)
}


