import { getUser, getUsuarioActivo } from "../../bases/05-funciones"
import '@testing-library/jest-dom'

describe('Pruebas 05-funciones.js', () => {
    test('should return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()

        console.log(user)

        expect(user).toEqual(userTest)
    })

    test('should return an object whit a determinated name', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUsuarioActivo('El_Papi1502')

        // console.log(user)

        expect(user).toEqual(userTest)
    })

})