/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const PrimeraApp = ({ title, subTitle, name }) => {
	// const { title } = props

	return (
		<>
			{/* <h1>{getResult(5, 8)}</h1> */}
			<h1>{title}</h1>
			{/* <code>{JSON.stringify(variable)}</code> */}
			<h2>Aqui recibimos el segundo parámetro subTitle desde el padre {subTitle + 1}</h2>
			<h3>{name}</h3>
		</>
	)
}

// const getResult = (a, b) => {
// 	return a + b
// }

PrimeraApp.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.number.isRequired,
}

PrimeraApp.defaultProps = {
	name: 'Gabriel por defecto',
	subTitle: 0,
	title: 'Titulo por defecto, cuando no se ha mandado nada por parámetro',
}

export default PrimeraApp
