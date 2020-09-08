import {Grid, Card, CardActionArea, CardMedia, ThemeProvider, CardContent, Typography} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/styles'
import Filters from './common/Filters'
const useStyles = makeStyles({
  root: {
    
  },
  listingContainer:{
    // maxWidth: 1000,
    marginTop: 16
  },
  cardContainer:{
    maxWidth: 300,
  },
  paginationContainer: {
    '& ul': {
      justifyContent: 'center',
    },
    margin: '16px 0'
  }
})

export default function Listing(){
  const classes = useStyles()
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={3}>
        <Filters />
      </Grid>
      <Grid item xs={9} className={classes.listingContainer}>
        <Grid container spacing={2}>
          {
            Array(30).fill(1).map(item => (
              <Grid item>
                <Card className={classes.cardContainer}>
                  <CardActionArea>
                    <CardMedia 
                      component="img"
                      src="http://lorempixel.com/g/300/200/"
                      alt="cardlist"
                    />
                  </CardActionArea>
                  <CardContent >
                    <Typography variant="h4">
                      Title
                    </Typography>
                    <Typography>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
        <Pagination className={classes.paginationContainer} count={10} />
      </Grid>
    </Grid>
  )
}