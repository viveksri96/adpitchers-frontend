import { 
  Button, 
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography, 
  Paper,
  Link
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Modal from '@material-ui/core/Modal';
import Sidebar from "../crm/common/Sidebar";
import AdsForm from './create-ad'
import {Edit, Delete, Add} from '@material-ui/icons';
import {Axios, createEnv} from '../config/environment'
import Carousel from 'react-material-ui-carousel'


const styles = {
  root: {
    
  },
  listingContainer: {
    padding: '20px'
  },
  pageTitle: {
    marginBottom: 24
  }
  // buttonContainer: {
  //   display: 'flex',
  //   justifyContent: 'flex-end',
  //   paddingBottom: '12px',
  // },
}

class MyBillboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showCreateModal: false
    }
  }

  componentDidMount(){
    createEnv({token: localStorage.getItem('adpitchers_token')})
    this.getData()
  }
  
  getData = () => {
    Axios.get('/user/billboards').then(res => {
      this.setState({list: res.data.data, totalPages: res.data.paging.total_pages})
    })
  }

  handleDelete(id){
    Axios.delete(`/billboard/${id}`)
      .then(res => {
        this.setState((state) => ({list: state.list.filter(item => item.id !== id)}))
      })
      .catch(e => {
        console.log('Something went wrong.')
      })
  }


  render(){
    const {classes} = this.props
    const {showCreateModal, list} = this.state

    return(
      <Grid container className={classes.root}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className={classes.listingContainer}>
          <Typography variant="h3" className={classes.pageTitle}>
            My Billboards
            <Link href="/create-ad">
              <Button 
                color="primary"
                variant="outlined"
                disableElevation={true}
                className={classes.createBtn}
                startIcon={<Add />}
                style={{marginLeft: 12}}
              >
                <Typography variant='body1'>New Billboard</Typography>
              </Button>
            </Link>
          </Typography>
          <Grid container spacing={2}>
            {
              list && list.map(billboard => (
                <Grid item>
                  <Card className={classes.cardContainer}>
                    <Carousel>
                      {
                        billboard.billboard_image.map( (item, i) => (
                          <img key={item.filename} width="300" height='200' src={item.url}/>
                        ))
                      }
                    </Carousel>
                    <CardContent >
                      <Button 
                        color="primary" 
                        onClick={() => this.setState({showCreateModal: false})}
                        startIcon={<Edit />}
                      >
                        Update
                      </Button>
                      <Button 
                        color="secondary"
                        startIcon={<Delete />}
                        onClick={this.handleDelete.bind(this, billboard.id)}
                      >
                        Delete
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
          <Modal
            open={showCreateModal}
            onClose={() => this.setState({showCreateModal: false})}
            aria-labelledby="create-modal"
            aria-describedby="create-modal-ads"
          >
            <Typography>model text</Typography>
            {/* <AdsForm /> */}
          </Modal>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(MyBillboard)