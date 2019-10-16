import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
// import MovieList from './Movies/MovieList';
// import Route from 'react-router-dom/Route';
// import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList( [...savedList] );
  };
  
  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;