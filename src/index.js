import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
//variable for yt data api
const API_KEY = 'AIzaSyCbm9aGhG11Fo2xG9ilDgEm1cXzHNxqhpw';


// create a new component. This component should produce some html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            //key value pair are the same name so just need curly braces
            this.setState({ videos });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

// Take this component's generated HMTL and put it in the page (in the DOm)
ReactDOM.render(
    <App />, document.querySelector('.container')
);
