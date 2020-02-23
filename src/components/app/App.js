import React from 'react';
import './App.css';
import {SearchBar} from '../searchbar/searchbar';
import {RecipeList} from '../recipelist/recipelist';


class App extends React.Component{
  render(){
    return (
        <>
        <div className='App'>
              <h1>Store Cupboard</h1>
              <SearchBar/>
              <RecipeList/>
        </div>
      </>
    )
  }
}

export default App;