import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = 'ab94b64843c598c3516eb60a2ce86c0f';

class App extends Component {
	state = {
		recipes: []
	};

	getRecipe = async (e) => {
		const recipeName = e.target.elements.recipeName.value;
		e.preventDefault();

		const res = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
		const data = await res.json();
		this.setState({
			recipes: data.recipes
		});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Recipe Search</h1>
				</header>
				<Form getRecipe={this.getRecipe} />
				<Recipes recipes={this.state.recipes} />
			</div>
		);
	}
}

export default App;
