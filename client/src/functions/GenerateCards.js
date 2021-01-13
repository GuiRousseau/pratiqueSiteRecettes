import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function GenerateCards(cards, recipes) {
    const realcards = cards.map((entry) =>{
      return (
        <Grid item key={entry} xs={4}>
          <Card >
            <CardContent>
              <Typography variant="h5" component="h2">
                {entry}
               </Typography>
              <Typography variant="body2" component="p">
                {recipes[entry]['desc']}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Plus</Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });
    return realcards;
  };