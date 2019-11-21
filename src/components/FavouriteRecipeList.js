import React from 'react';
import { connect } from 'react-redux';
import RecipeItem from './recipeItem'
import { Link } from 'react-router-dom'

class FavouriteRecipiesList extends React.Component {
    render() {
        return (
            <div>
                <h2>Favourite Recipe</h2>
                <h4 className="link"><Link  to="/">Home</Link></h4>
                {
                    this.props.favouriteRecipies.map((recipe, index) => {
                        return (
                            <RecipeItem key={index} recipe={recipe} favouriteButton={false} />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        favouriteRecipies: state.favouriteRecipies
    }
}

export default connect(mapStateToProps, null)(FavouriteRecipiesList)