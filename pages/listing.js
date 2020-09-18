import {
  Grid, 
  Card, 
  CardActionArea, 
  CardMedia, 
  CardContent, 
  Typography, 
  Link, 
  Chip,
  Select,
  MenuItem
} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import { withStyles } from '@material-ui/styles'
import Filters from './common/Filters'
const styles = {
  root: {
    
  },
  listingContainer:{
    // maxWidth: 1000,
    marginTop: 16
  },
  listDetailContainer: {
    margin: '16px 0'
  },
  showingofText: {
    marginBottom: '16px'
  },
  chipContainer: {
    marginRight: 6
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
}

class Listing extends React.Component {


  render(){
    const {classes} = this.props
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={3}>
          <Filters />
        </Grid>
        <Grid item xs={9} className={classes.listingContainer}>
          <Grid container className={classes.listDetailContainer}>
            <Typography variant="h5" margin="dense" className={classes.showingofText}>Showing 30 of 100</Typography>
            <Grid container>
              <Grid item xs={8}>
                {
                  Array(4).fill(4).map(item => (
                    <Chip
                      label="Deletable"
                      onDelete={console.log}
                      className={classes.chipContainer}
                    />
                  ))
                }
              </Grid>
              <Grid item xs={4}>
              <Select
                value={'recommended'}
                onChange={console.log}
              >
                <MenuItem value={'newest'}>Sort by Newest</MenuItem>
                <MenuItem value={'recommended'}>Sort by Recommended</MenuItem>
                <MenuItem value={'hl'}>Sort by Price(high to low)</MenuItem>
                <MenuItem value={'lh'}>Sort by Price(low to high)</MenuItem>
                <MenuItem value={'booked'}>Sort by Mostly booked</MenuItem>
              </Select>
              </Grid>
            </Grid>
            </Grid>
          <Grid container spacing={2}>
            {
              Array(30).fill(1).map(item => (
                <Grid item>
                  <Link href="/[item-details]" as={'/hello-world'}>
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
                  </Link>
                </Grid>
              ))
            }
          </Grid>
          <Pagination className={classes.paginationContainer} count={10} />
        </Grid>
      </Grid>
    )
  }
}


export default withStyles(styles)(Listing)