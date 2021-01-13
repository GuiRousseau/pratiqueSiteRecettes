import React, { Component } from 'react';
/*import { Link } from 'react-router-dom';*/
import SearchBar from "material-ui-search-bar";
import Grid from '@material-ui/core/Grid';
import {recettesData} from '../Recipes'
import  CreateCards from "../functions/CreateCards";
import  FiltrerRecettes  from "../functions/FiltrerRecettes";

var tagsRecettes = {};
const recettesJsON = JSON.stringify(recettesData.recipes);
const recipes = JSON.parse(recettesJsON);
Object.keys(recipes).forEach(function(entry) {
  tagsRecettes[entry] = recipes[entry]['tags']
});
console.log(tagsRecettes)

class Home extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: [],
      searchTags: [],
      content: CreateCards(Object.keys(recipes), recipes)
    }
  }

  refreshPage = ()=>{
    window.location.reload();
  }

  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <SearchBar width={0.75}
        value={this.state.value}
        onChange={(newValue) => this.setState({searchTags: newValue.split(" ")})}
        onRequestSearch={() =>  this.setState({content: FiltrerRecettes(this.state.searchTags, tagsRecettes, recipes)})}/* TO-DO faire marcher */ 
      />
      <Grid container spacing={1}>
        {this.state.content}
      </Grid>
    </div>
    );
  }
}
export default Home;