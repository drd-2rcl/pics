import React, { Component } from 'react';
import Axios from 'axios';

import SearchBar from './components/SearchBar';

class App extends Component {
  onSearchSubmit(term) {
    Axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID e0d66c1a05602fb01d19d7233dda0a815b081af0efcf32efc0c639a0ad8a82b1'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;