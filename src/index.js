import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
//variable for yt data api
const API_KEY = 'AIzaSyCbm9aGhG11Fo2xG9ilDgEm1cXzHNxqhpw';
// create a new component. This component should produce some html
const App = () => {
    return (
    <div>
        <SearchBar />
        </div>
        );
}

// Take this component's generated HMTL and put it in the page (in the DOm)
ReactDOM.render(
    <App />, document.querySelector('.container')
);
