import React, { Fragment } from 'react'
// import React, { Fragment } from 'react'
import PropTypes from 'prop-types'





const PrimeraApp = ({ saludo, subtitulo }) => {
    // const PrimeraApp = (props) => {
    // const saludo = 'Hola Mundo'
    // console.log(props)
    // if (!saludo) throw new Error('el saludo es necesario');


    return <>
        <h1>{saludo}</h1>
        {/* <h1> {JSON.stringify(saludo, null, 10)}</h1> */}
        <p> {subtitulo}</p>
    </>

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtítulo'
}

export default PrimeraApp