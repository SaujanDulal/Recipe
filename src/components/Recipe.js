import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = 'ab94b64843c598c3516eb60a2ce86c0f';

class Recipe extends Component {
	state = {
		activeRecipe: []
	};

	componentDidMount = async () => {
		const title = this.props.location.state.recipe;
		const response = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
		const data = await response.json();
		this.setState({
			activeRecipe: data.recipes[0]
		});
	};
	render() {
		console.log(this.props);
		const recipe = this.state.activeRecipe;

		return (
			<div className='container'>
				{this.state.activeRecipe.length !== 0 && (
					<div className='active-recipe'>
						<img className='active-recipe__img' src={recipe.image_url} alt={recipe.title} />
						<h3 className='active-recipe__title'>{recipe.title}</h3>
						<h4 className='active-recipe__publisher'>
							Publisher: <span>{recipe.publisher}</span>
						</h4>
						<p className='active-recipe__website'>
							Website:
							<span>
								<a href={recipe.publisher_url}>{recipe.publisher_url}</a>
							</span>
						</p>
						<button className='active-recipe__button'>
							<Link to='/'>Go Home</Link>
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default Recipe;
