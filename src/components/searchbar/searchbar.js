import React from 'react';
import './searchbar.css';

export class SearchBar extends React.Component{
  render(){
    return (
      <>
        <input placeholder='ingredients...'></input>
        <button>Search For Recipes</button>
      </>
    )
  }
}


