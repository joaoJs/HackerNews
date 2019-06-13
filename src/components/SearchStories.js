import React, { Component } from 'react';
import Button from './Button';

class SearchStories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.onChange}
        />
        <Button type="submit">Search</Button>
      </form>
    );
  }
}

export default SearchStories;
