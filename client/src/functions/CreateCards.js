import Grid from '@material-ui/core/Grid';
import GenerateCards from "./GenerateCards";

export default function CreateCards(names, recipes){
    const newArr = [];
    while(names.length) newArr.push(names.splice(0,3));
    
    var rows = newArr.map( (entry)=>{
      const cardsOfRow = GenerateCards(entry, recipes);
      return(
      <Grid container item key={Math.random()} xs={12} spacing={3} >
        {cardsOfRow}
      </Grid>
      )
    })
    return rows
}