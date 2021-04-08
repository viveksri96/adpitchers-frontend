import { Button, CircularProgress, Grid, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Formik } from "formik";
import { Axios, createEnv } from "../../config/environment";
import Sidebar from "../../crm/common/Sidebar";

const styles = {
  root: {},
  accountContainer: {
    padding: 18,
    paddingBottom: 0,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
  avatarRoot: {
    width: "150px",
    height: "150px",
  },
  formContainer: {
    width: 600,
  },
};

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailsFetched: false,
    };
  }

  componentDidMount() {
    createEnv({ token: localStorage.getItem("adpitchers_token") });
    Promise.all([this.getUserDetails(), this.getVendorDetails()]).then(
      (res) => {
        this.setState({
          isDetailsFetched: true,
          details: { ...res[0].data, ...res[1].data },
        });
      }
    );
  }

  getUserDetails() {
    return Axios.get("/user/").catch((err) =>
      console.log("error fetching user details")
    );
  }

  getVendorDetails() {
    return Axios.get("/vendor/details").catch((err) =>
      console.log("error fetching user details")
    );
  }

  handleSubmit = (values, { setSubmitting }) => {
    const input = { ...values };
    const REMOVE_FIELDS = ["id", "email", "phone_number"];
    REMOVE_FIELDS.forEach((field) => delete input[field]);
    console.log(input);
    Axios.put("/vendor/details", input)
      .then((res) => {
        setSubmitting(false);
        console.log("successfully submitted");
      })
      .catch((err) => {
        setSubmitting(false);
        console.log("error submitting data");
      });
  };

  render() {
    const { classes } = this.props;
    const { details, isDetailsFetched } = this.state;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className={classes.accountContainer}>
          <div style={{ width: 600 }}>
            {isDetailsFetched ? (
              <Formik
                initialValues={{ ...details }}
                onSubmit={this.handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => {
                  return (
                    <>
                      <Grid
                        container
                        spacing={2}
                        className={classes.formContainer}
                      >
                        {/* <Avatar
                        alt="Remy Sharp"
                        classes={{ root: classes.avatarRoot }}
                        src="/static/images/avatar/1.jpg"
                        className={classes.large}
                      /> */}

                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            size="small"
                            name="organization_name"
                            margin="dense"
                            label="Business Name"
                            variant="outlined"
                            required
                            value={values.organization_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            size="small"
                            name="description"
                            margin="dense"
                            label="Description"
                            variant="outlined"
                            required
                            value={values.description}
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
                            label="Phone number"
                            variant="outlined"
                            required
                            value={values.phone_number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            size="small"
                            name="altername_number"
                            margin="dense"
                            label="Alternate Number"
                            variant="outlined"
                            required
                            value={values.alternate_number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            size="small"
                            name="address_line_1"
                            margin="dense"
                            label="Address Line 1"
                            variant="outlined"
                            required
                            value={values.address_line}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            size="small"
                            name="landmark"
                            margin="dense"
                            label="Landmark"
                            variant="outlined"
                            required
                            value={values.landmark}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            size="small"
                            name="area"
                            margin="dense"
                            label="Area"
                            variant="outlined"
                            required
                            value={values.area}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            size="small"
                            name="city"
                            margin="dense"
                            label="City"
                            variant="outlined"
                            required
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            size="small"
                            name="city"
                            margin="dense"
                            label="City"
                            variant="outlined"
                            required
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            size="small"
                            name="pincode"
                            margin="dense"
                            label="Pincode"
                            variant="outlined"
                            required
                            value={values.pincode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            size="small"
                            name="gstin"
                            margin="dense"
                            label="GSTIN Number"
                            variant="outlined"
                            required
                            value={values.gstin_number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Grid>
                      </Grid>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        disableElevation={true}
                        style={{
                          marginTop: 12,
                          marginRight: 12,
                          width: 120,
                          float: "right",
                        }}
                        onClick={handleSubmit}
                      >
                        Save
                      </Button>
                    </>
                  );
                }}
              </Formik>
            ) : (
              <CircularProgress />
            )}
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Account);
