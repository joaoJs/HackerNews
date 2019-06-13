import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './components/App.css';
import Stories from './components/Stories';
import SearchStories from './components/SearchStories';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <div className="interactions">
        <SearchStories />
      </div>
      <Stories />
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
