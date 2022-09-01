import { useState } from 'react'
import './styles.css'

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

	const onAddCategory = () => {
		// setCategories(['Love'])
		console.log(categories)
	}

	return (
		<>
			{/* Titulo */}
			<div>GifExpertApp</div>
			<button onClick={onAddCategory}>Add</button>

			{/* Input */}

			{/* Listado de Gif */}
			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>
				})}
				{/* <li>ABC</li> */}
			</ol>

			{/* Git item */}
		</>
	)
}
