import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID 4e32efa4909930498766c4998aee5035bedece007413bed3fa267cbf8d8e6e60'
            }

        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10 px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
            </div>
        );
    }

}

export default App;