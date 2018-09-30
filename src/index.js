import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
//variable for yt data api
const API_KEY = '';


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
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HMTL and put it in the page (in the DOm)
ReactDOM.render(
    <App />, document.querySelector('.container')
);
