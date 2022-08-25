import '@testing-library/jest-dom'

import { getSaludo } from "../../bases/02-template-strings"

describe('Pruebas en 02-template-strings.js', () => {
    test('getSaludo debe retornar "Hola nombre"', () => {
        const nombre = 'Gabri'

        const saludo = getSaludo(nombre)

        expect(saludo).toBe(`Hola ${nombre}`)
    })
    test('getSaludo debe retornar "Hola Sin Nombre" si no se le pasa nada a la función', () => {
        const saludo = getSaludo()

        expect(saludo).toBe('Hola Sin nombre')
    })
})