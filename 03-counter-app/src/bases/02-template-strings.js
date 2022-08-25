const nombre = 'Gabriel'
const apellido = 'Galdeano'

const nombreCompleto = ` 
Mi nombre es
${nombre} 
${apellido}
`

// console.log(nombreCompleto)

export function getSaludo(valor = 'Sin nombre') {
    return `Hola ${valor}`
}


// console.log(`Este es un texto: ${getSaludo(nombre)}`)
