import React from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { setRecipes } from '../actions'

class SearchRecipes extends React.Component {
    constructor() {
        super();
        this.state = {
            ingredients: '',
            dish: ''
        }
    }

    Search() {
        let { ingredients, dish } = this.state;
        let url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`

        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => this.props.setRecipes(json.results))
    }
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <Form.Label>Ingredients</Form.Label>
                    <span />
                    <FormControl
                        type="text"
                        placeholder="garlic, chicken"
                        onChange={event => this.setState({ ingredients: event.target.value })} />
                </FormGroup>
                <span />
                <FormGroup>
                    <Form.Label>Dish</Form.Label>
                    <span />
                    <FormControl
                        type="text"
                        placeholder="adobo"
                        onChange={event => this.setState({ dish: event.target.value })}
                    />
                </FormGroup>
                <span />
                <Button onClick={() => this.Search()}>Submit</Button>
            </Form>
        )
    }
}

export default connect(null, { setRecipes })(SearchRecipes); 