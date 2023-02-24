import { post } from "./api.js";

export async function getAll(){         //read info from catalog.js
    return post('/data/pets?sortBy=_createdOn%20desc&distinct=name')
}