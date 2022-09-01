import React from 'react'
import ReactDOM from 'react-dom/client'
import CounterApp from './CounterApp'
// import { FirstApp } from './FirstApp'
// import PrimeraApp from './PrimeraApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <FirstApp /> */}
		<CounterApp value={10} />
	</React.StrictMode>
)
