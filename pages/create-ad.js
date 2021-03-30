import { Grid, Input, TextField, Typography, Box, Button, CircularProgress } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/styles"
import Maps from "../common/Maps"
import { Formik } from 'formik';
import { Axios, createEnv } from "../config/environment";

const styles = {
  root: {
    
  },
  headerBackground: { 
    display: 'none',
    height: '500px',
    width: '100%',
    background: 'linear-gradient(55deg,#164188,#007fed)',
    position: 'absolute',
    top: 0
  },
  formContainer: {
    marginTop: 100,
    backgroundColor: 'white',
    maxWidth: '700px',
    margin: "0 auto",
    border: "1px solid #eeeeee",
    zIndex: 1,
    padding: "32px",
  },
  imageUploadContainer: {
    border: '1px solid #eeeeee',
    display: 'inline-block',
    padding: '24px 12px',
    textAlign: 'center',
    marginTop: '12px'
  },
  createBtn: {
    marginTop: '12px'
  },
  labelText: {
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '12px',
    marginBottom: '4px',
  }
}

class AdsForm extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      page: 1
    }
  }

  componentWillMount(){

  }

  componentDidMount(){
    createEnv({token: localStorage.getItem('adpitchers_token')})
  }

  handleImageUpload = (e, setFeildValue) => {
    let promises = []
    for (let i = 0; i < e.target.files.length; i++){
      let file = e.target.files[i]
      promises.push(new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = e => {
          let content = e.target.result;
          resolve({content, filename: file.name})
        };
        reader.readAsDataURL(file);
      }))
    }
    Promise.all(promises).then(result => {
      setFeildValue('images', result)
    })
  }

  handleSubmit = (values, { setSubmitting }) => {
    this.setState({loading: true})
    Axios.post('/billboard/', values)
      .then(res => window.location.href =  '/my-billboard')
      .catch(e => console.log('error creating modal'))
    setSubmitting(false);
  }


  render(){
    const {classes} = this.props
    const {page, loading} = this.state
    return(
      <Grid container className={classes.root}>
        <div className={classes.headerBackground} />
        <Formik
          initialValues={{ 
            lat: 26.8467,
            lng: 80.9462,
            description: '',
            price: '',
            images: [],
            size: ''
          }}
          onSubmit={this.handleSubmit}
        >
          {
            ({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue
            }) => {
              return (
                  <Grid container className={classes.formContainer}>
                    <form onSubmit={handleSubmit}>
                    {
                      page === 1 &&
                      <>
                        <Typography variant="h3">Enter Billboard details</Typography>
                        <Grid item xs={12}>
                          <Typography varint="h6" className={classes.labelText}>Description</Typography>
                          <TextField 
                            fullWidth 
                            name="description"
                            margin="normal" 
                            variant="outlined" 
                            multiline
                            size="small"
                            margin="none"
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <Typography  varint="h6" className={classes.labelText}>Size</Typography>
                          <TextField 
                            fullWidth 
                            margin="normal" 
                            name="price"
                            variant="outlined"
                            size="small"
                            margin="none"
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <Typography  varint="h6" className={classes.labelText}>Price</Typography>
                          <TextField 
                            fullWidth 
                            margin="normal" 
                            name="size"
                            variant="outlined"
                            size="small"
                            margin="none"
                            value={values.size}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <Box component="div" className={classes.imageUploadContainer}>
                            <Typography variant="h6">Upload images</Typography>
                            <input 
                              name="images" 
                              placeholder="Placeholder" 
                              type="file" 
                              multiple 
                              onChange={(e) => this.handleImageUpload(e, setFieldValue)}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          {/* <Button 
                            variant="contained" 
                            color="primary" 
                            className={classes.createBtn} 
                            onClick={() => this.setState({page: 2})}
                          >
                            Next
                          </Button> */}
                          <Button 
                            variant="contained" 
                            color="primary" 
                            disabled={isSubmitting}
                            className={classes.createBtn}
                            type="submit"
                            disabled={loading}
                            disableElevation={true}
                            endIcon={loading && <CircularProgress style={{color: 'white'}} size={16} />}
                          >
                            Create 
                          </Button>
                        </Grid>
                      </>
                    }
                    {
                      page === 2 &&
                      <>
                        <Typography variant="h3">Create Slots</Typography>
                        <Grid>
                          <Button>Add New Slots</Button>
                          
                        </Grid>
                      </>
                    }
                    {/* {
                      page === 2 &&
                      <>
                        Choose Location 
                        <Maps />
                      </>
                    } */}
                  </form>
                </Grid>
              )
            }
          }
        </Formik>
      </Grid>
    )
  }
}

// const Slot

export default withStyles(styles)(AdsForm)