import React from 'react';
import { connect } from 'react-redux'
import RecipeItem from './recipeItem';
import { Link } from 'react-router-dom'

class RecipeList extends React.Component {
    render() {
        console.log('props:', this.props)
        return (

            <div>
                {
                    this.props.favouriteRecipies.length > 0 ? <h4 className="link"><Link to="/favorites">favourites</Link></h4> : <div></div>
                }
                {
                    this.props.recipes.map((recipe, index) => {
                        return <RecipeItem key={index} recipe={recipe} favouriteButton={true} />
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, null)(RecipeList)