import React from 'react'
import { favouriteRecipe } from '../actions'
import { connect } from 'react-redux'
import '../styles/index.css'

class RecipeItem extends React.Component {

    constructor() {
        super()
        this.state = {
            favouriteItem: false
        }
    }

    favourite(recipe) {
        this.props.favouriteRecipe(recipe);
        this.setState({ favouriteItem: true })
    }

    render() {
        const { recipe } = this.props;
        return (
            <div className="recipe-item">
                {
                    this.props.favouriteButton?
                    this.state.favouriteItem ?
                        <div className="star">&#9733;</div> :
                        <div
                            className="star"
                            onClick={() => this.favourite(recipe)}
                        >&#9734;</div>:
                        <div></div>
                }
                <div className="recipe-text">
                    <a href={recipe.href}>
                        <h3>{recipe.title}</h3>
                    </a>
                    <p>{recipe.ingredients}</p>
                </div>
                <img
                    src={recipe.thumbnail}
                    alt={recipe.title}
                    className="recipe-img">
                </img>
            </div>
        )
    }
}

export default connect(null, { favouriteRecipe })(RecipeItem);