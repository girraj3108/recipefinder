import React from 'react';
import SearchRecipes from './SearchRecipes'
import RecipeList from './recipeList';

import '../styles/index.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <h2> recipe finder</h2>
                <SearchRecipes />
                <RecipeList />
            </div>
        )
    }
}

export default App;