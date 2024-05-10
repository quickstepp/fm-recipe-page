import './App.css';
import { useState, useEffect } from 'react';
import Image from './components/Image';
import Introduction from './components/Introduction';

function App() {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch("recipes.json",{
			headers : { 
			  'Content-Type': 'application/json',
			  'Accept': 'application/json'
			 }
		   })
		.then( res => res.json())
		.then(result => {
			setRecipes(result);
		});
	},[])

	return (
		<div className="App">
			<header className="App-header">
				<div className='recipe-container'>
					<Image imageSRC={recipes.img} />
					<Introduction
						name={recipes.name}
						introduction={recipes.introduction}
					 />
				</div>
			</header>
		</div>
	);
}

export default App;
