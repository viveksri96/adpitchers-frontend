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
import {Axios} from './config/environment'

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

  constructor(props){
    super(props)
    this.state = {
      page: 1
    }
  }

  componentWillMount(){
    this.getData()
  }


  getData = () => {
    Axios.get('/billboards', {
      params: {
        page: this.state.page
      }
    }).then(res => {
      this.setState({list: res.data.data, totalPages: res.data.paging.total_pages})
    })
  }

  handlePagination = (e, page) => {
    this.setState({page}, this.getData)
  }

  render(){
    const {classes} = this.props
    const {list} = this.state

    console.log(this.state)
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
              list && list.map(item => (
                <Grid item>
                  <Link href="/[item-details]" as={item.id}>
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
                          {item.location}
                        </Typography>
                        <Typography>
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))
            }
          </Grid>
          <Pagination className={classes.paginationContainer} count={this.state.totalPages} onChange={this.handlePagination} />
        </Grid>
      </Grid>
    )
  }
}


export default withStyles(styles)(Listing)