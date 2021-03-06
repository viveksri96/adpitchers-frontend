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
import {BookmarkBorder} from '@material-ui/icons'
import Pagination from '@material-ui/lab/Pagination';
import { withStyles } from '@material-ui/styles'
import Filters from '../common/Filters'
import {Axios} from '../config/environment'
import Carousel from 'react-material-ui-carousel'

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
      justifyContent: 'center'
    },
    margin: '16px 0'
  },
  loaderContainer: {
    height: '600px',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: '0px',
  }
}

class Listing extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      page: 1,
      paging: {},
      list: []
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
      this.setState({list: res.data.data, paging: res.data.paging})
    })
  }

  handlePagination = (e, page) => {
    this.setState({page}, this.getData)
  }

  render(){
    const {classes} = this.props
    const {list, paging} = this.state

    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={3}>
          <Filters />
        </Grid>
        <Grid item xs={9} className={classes.listingContainer}>
          <Grid container className={classes.listDetailContainer}>
            <Typography variant="h5" margin="dense" className={classes.showingofText}>Showing {list.length} of {paging.total_items}</Typography>
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
              list && list.length
              ? 
              list.map(billboard => (
                <Grid item>
                  <Link href={`/pd/${billboard.id}`}>
                    <Card className={classes.cardContainer}>
                      <Carousel 
                        // autoPlay={false}
                        className={classes.carouselContainer}
                        indicatorContainerProps={{className: classes.indicatorContainer}}
                      >
                        {
                          billboard.billboard_image.map( (item, i) => (
                            <img key={item.filename} width="300" height='200' src={item.url}/>
                          ))
                        }
                      </Carousel>
                      <CardContent >
                        <Typography variant="body1" style={{fontWeight: 600}}>
                          {billboard.location || 'Lucknow, India'} <span style={{float: 'right', color: '#c4bbbb'}}><BookmarkBorder /></span>
                        </Typography>
                        <Typography variant="body2">
                          {'lorem ipsum' || billboard.description }
                        </Typography>
                        <Typography variant="body1" style={{color: '#c4bbbb'}}>
                          &#8377; {(+billboard.price).toFixed(2)}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))
              :
              <div className={classes.loaderContainer}>
                <div><img src={'/assets/loader.gif'} /></div>
                <Typography align="center" variant="body2"><em>Finding the best <br/> billboard.</em></Typography>
              </div>
            }
          </Grid>
          <Pagination className={classes.paginationContainer} count={paging.total_pages} onChange={this.handlePagination} />
        </Grid>
      </Grid>
    )
  }
}


export default withStyles(styles)(Listing)