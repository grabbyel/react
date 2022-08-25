// import { heroes } from "./data/heroes"
// import moduleName from './data/heroes' // snippet "imp"

import heroes, { owners } from "../data/heroes"

// import { heroes } from "./data/heroes" // importación automática abriendo y cerrando el archivo


// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id) {
//             return true
//         } else return false
//     })
// }

const getHeroeById = (id) => heroes.find(heroe => heroe.id === id) // find sólo devuelve un valor


const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner)

// console.log(getHeroeById(2))
// console.log(getHeroeByOwner('DC'))
// console.log(owners)

export {
    getHeroeById,
    getHeroeByOwner
}