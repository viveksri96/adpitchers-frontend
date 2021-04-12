import { Button, Grid, Link, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Formik } from "formik";
import { Axios } from "../config/environment";

const styles = {
  signupContainer: {
    height: "100%",
    margin: "0 auto",
    display: "flex",
    maxWidth: "600px",
    minHeight: "calc(100vh - 60px)",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 10px",
  },
};

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (values, { setSubmitting }) => {
    const input = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password,
    };
    Axios.post("/signup/", input)
      .then((res) => {
        console.log(res);
        localStorage.setItem("adpitchers_token", res.data.token);
        window.location.replace(window.location.origin + "/");
      })
      .catch((err) => {
        setSubmitting(false);
        this.setState({ error: "Username or password is incorrect." });
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        onSubmit={this.handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          ...props
        }) => {
          return (
            <Grid container className={classes.signupContainer} spacing={2}>
              <Grid item>
                <Typography variant="h3" style={{ fontWeight: "bold" }}>
                  Sign up
                </Typography>
              </Grid>
              <Grid item>{/* <Typography variant="h6"> </Typography> */}</Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="firstName"
                    margin="normal"
                    label="First Name"
                    variant="outlined"
                    required
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    name="lastName"
                    margin="normal"
                    label="Last Name"
                    variant="outlined"
                    required
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                name="email"
                margin="normal"
                label="E-mail"
                variant="outlined"
                required
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                fullWidth
                name="password"
                type="password"
                margin="normal"
                label="Password"
                variant="outlined"
                required
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Grid container>
                <Typography align="left" variant="caption">
                  <em>Fields that are marked with * sign are required.</em>
                </Typography>
              </Grid>
              <Button
                fullWidth
                style={{ marginTop: 20 }}
                size="large"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={props.isSubmitting}
              >
                Sign up
              </Button>
              <Grid item>
                <Typography variant="body1" className={classes.newAccText}>
                  Already have an account?{" "}
                  <Link href="/reset-password">
                    <Typography component="span" style={{ fontWeight: "600" }}>
                      Login
                    </Typography>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          );
        }}
      </Formik>
    );
  }
}

export default withStyles(styles)(Signup);
