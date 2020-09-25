import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Formik } from "formik";
import Sidebar from "../../crm/common/Sidebar";
import { Axios, createEnv } from "../../config/environment";

const styles = {
  root: {},
  accountContainer: {
    padding: 18,
    paddingBottom: 0,
  },
  formContainer: {
    width: 600,
  },
};

class Account extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userDetailsFetched: false
    }
  }
  
  componentDidMount(){
    createEnv({token: localStorage.getItem('adpitchers_token')})
    Axios.get('/user/')
      .then(res => this.setState({details: res.data, userDetailsFetched: true}))
      .catch(err => console.log('error fetching user details'))
  }
  

  handleSubmit = (values, { setSubmitting }) => {
    Axios.put('/user/', {...values})
      .then(res => {
        setSubmitting(false)
        console.log('successfully submitted')
      })
      .catch(err => {
        setSubmitting(false)
        console.log('error submitting data')
      })
    

  };

  render() {
    const { classes } = this.props;
    const {details, userDetailsFetched} = this.state
    return (
      <Grid container className={classes.root}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className={classes.accountContainer}>
          <Typography variant="h4">Account details</Typography>
          {
            userDetailsFetched &&
            <Formik
              initialValues={{...details}}
              onSubmit={this.handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => {
                return (
                  <>
                    <Grid container spacing={2} className={classes.formContainer}>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          size="small"
                          name="first_name"
                          margin="dense"
                          label="First Name"
                          variant="outlined"
                          required
                          value={values.first_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          size="small"
                          name="last_name"
                          margin="dense"
                          label="Last Name"
                          variant="outlined"
                          required
                          value={values.last_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          size="small"
                          name="phone_number"
                          margin="dense"
                          label="Phone Number"
                          variant="outlined"
                          required
                          value={values.phone_number}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>
                      <Grid item xs={6}>
                      </Grid>
                      {/* <Grid item xs={6}>
                        <TextField
                          fullWidth
                          size="small"
                          name="phone_number"
                          margin="dense"
                          label="Phone Number"
                          variant="outlined"
                          required
                          value={values.phone_number}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          size="small"
                          name="phone_number"
                          margin="dense"
                          label="Phone Number"
                          variant="outlined"
                          required
                          value={values.phone_number}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid> */}
                      
                    </Grid>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      disabled={isSubmitting}
                      disableElevation={true} 
                      style={{marginTop: 12}}
                      onClick={handleSubmit}
                    >
                      Save
                    </Button>
                  </>
                );
              }}
            </Formik>
          }
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Account);
