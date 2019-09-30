import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageLists from './ImageLists';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10 px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
                Found: {this.state.images.length} images
                <ImageLists images={this.state.images}/>
            </div>
        );
    }

}

export default App;