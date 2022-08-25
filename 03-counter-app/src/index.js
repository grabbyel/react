// import PrimeraApp from './PrimeraApp'
import React from 'react'
import ReactDOM from 'react-dom'
import CounterApp from './CounterApp'

import './index.css'

const $app = document.getElementById('app')

ReactDOM.render(<CounterApp value={10} />, $app)


// console.log($app)