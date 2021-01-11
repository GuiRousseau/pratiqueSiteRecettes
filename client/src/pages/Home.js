import React, { Component } from 'react';
/*import { Link } from 'react-router-dom';*/
import SearchBar from "material-ui-search-bar";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {recettesData} from '../Recipes'

var tagsRecettes = {};
const recettesJsON = JSON.stringify(recettesData.recipes);
const recipes = JSON.parse(recettesJsON);
Object.keys(recipes).forEach(function(entry) {
  tagsRecettes[entry] = recipes[entry]['tags']
});

class Home extends Component {

  content = this.createCards(Object.keys(recipes));
  
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: [],
      tags: []
    }
  }

  createCards(names){
    const newArr = [];
    while(names.length) newArr.push(names.splice(0,3));
    const rows = [];

    newArr.forEach( (entry)=>{
      const cardsOfRow = this.generateCards(entry)
      rows.push(
      <Grid container item key={Math.random()} xs={12} spacing={3} >
        <React.Fragment>
          {cardsOfRow}
        </React.Fragment>
      </Grid>
      )
    })
    return rows
  }

  generateCards(cards){
    const classes = makeStyles({
      root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    });
    const realcards = [];
    cards.forEach((entry) =>{
      realcards.push(
        <Grid item key={entry} xs={4}>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {entry}
               </Typography>
              <Typography variant="body2" component="p">
                {recipes[entry]['desc']}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      )
    })
    return realcards
  }

  filtrerRecettes(){
    var names = [];
    this.state.tags.forEach(function(entry) {
      Object.keys(tagsRecettes).forEach(function(entry2) {
        if(tagsRecettes[entry2].includes(entry) && !names.includes(entry2)){
          names.push(entry2);
        }
      })
    })
    if(names.length === 0){
      names = Object.keys(recipes);
    }
    return this.createCards(names);
  }

  

  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <SearchBar
        value={this.state.value}
        onChange={(newValue) => this.setState({ tags: newValue.split})}
        onRequestSearch={() => this.content = this.filtrerRecettes()}
      />
      <Grid container spacing={1}>
        {this.content}
      </Grid>
    </div>
    );
  }
}
export default Home;