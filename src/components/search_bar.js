import React, { Component } from 'react';

//React.Component gives functionality from it
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    render() {
        return (
            <div>
                <input
                    //state should tell element what to do not other way around -- use controlled components. Value is set by state
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} 
                    />
            </div>
        );
    }
}

export default SearchBar;