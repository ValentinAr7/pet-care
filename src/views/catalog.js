import { getAll } from "../api/data.js";
import { html } from "../lib.js";

const catalogTemplate = (pets) => html `
<section id="dashboard">
<h2 class="dashboard-title">Services for every animal</h2>

    <div class="animals-board">
    ${pets.length == 0 ? html`    <div>
    <p class="no-pets">No pets in dashboard</p>
</div>` : pets.map(petCardTemplate)}



</div>
</section>`

const petCardTemplate = (pet) => html `
<div class="animals-dashboard">
    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src="./images/cat2.jpg">
        </article>
        <h2 class="name">Athena</h2>
        <h3 class="breed">American Curl</h3>
        <div class="action">
            <a class="btn" href="#">Details</a>
        </div>
    </div>
`

export async function showCatalog(ctx){
    const pets = await getAll();    //frrom data.js
    ctx.render(catalogTemplate([]));
}