import arrayHeroes from "./data/heroes"  //aquí importamos y renombramos el array "heroes", para usarlo con el nombre que le pongamos en la importación
import { getHeroeById, getHeroeByOwner } from './bases/08-import-export'



// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         const p1 = getHeroeById(1)
//         console.log(p1)

//         resolve(p1)  // de esta forma le estamos enviando p1 como parámetro al "then"
//         // reject('Mensaje de error')
//     }, 2000)
// })

// promesa.then((heroe) => { //aquí recibimos el parámetro enviado por el resolve
//     console.log(heroe.name)
// })
//     .catch(err => console.log(err))


const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => { //esto lo hacemos para que, al llamar a la función, detecte que es una promesa y pueda ser tratada como tal
        const p1 = getHeroeById(id)
        setTimeout(() => {

            console.log(p1)

            if (p1) {
                resolve(p1)
            } else reject('Heroe no encontrado') // de esta forma le estamos enviando p1 como parámetro al "then"
            // reject('Mensaje de error')
        }, 2000)
    })
}

getHeroesByIdAsync(2)
    .then(console.log)
    .catch(console.warn)