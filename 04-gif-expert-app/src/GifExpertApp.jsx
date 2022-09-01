import { useState } from 'react'

export const GifExpertApp = () => {
	const [categories, setcategories] = useState(['One Punch', 'Dragon Ball'])

	return (
		<>
			{/* Titulo */}
			<div>GifExpertApp</div>

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
