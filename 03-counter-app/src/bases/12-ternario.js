const activo = true
// let mensaje = (activo) ? 'activo' : 'inactivo'

const mensaje = activo && 'activo' //se leería como que cuando "activo" sea true, haga return de lo que hay despues de &&

console.log(mensaje)