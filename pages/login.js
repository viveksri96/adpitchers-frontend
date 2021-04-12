import { Button, Grid, Link, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Formik } from "formik";
import { Axios } from "../config/environment";

const styles = {
  loginContainer: {
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
  newAccText: {
    color: "#546e7a",
  },
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (values, { setSubmitting }) => {
    Axios.post("/login/", values)
      .then((res) => {
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
            <Grid container className={classes.loginContainer} spacing={2}>
              <Grid item>
                <Typography variant="h3" style={{ fontWeight: "bold" }}>
                  Sign in
                </Typography>
              </Grid>
              <Grid item className={classes.newAccText}>
                <Typography variant="h6">
                  Don't have an account?{" "}
                  <Link href="/signup">
                    <Typography component="span" style={{ fontWeight: "600" }}>
                      Sign up.
                    </Typography>
                  </Link>
                </Typography>
              </Grid>
              <TextField
                fullWidth
                name="email"
                margin="normal"
                label="E-mail"
                variant="outlined"
                required
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                fullWidth
                type="password"
                name="password"
                margin="normal"
                label="Password"
                variant="outlined"
                required
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Grid container style={{ flexDirection: "column" }}>
                <Typography align="left" variant="caption" component="div">
                  <em>Fields that are marked with * sign are required.</em>
                </Typography>
                <Typography align="left" variant="caption" component="div">
                  {this.state.error}
                </Typography>
              </Grid>
              <Button
                style={{ marginTop: 20 }}
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={props.isSubmitting}
              >
                Login
              </Button>
              <Grid item>
                <Typography variant="body1" className={classes.newAccText}>
                  Forgot your password?{" "}
                  <Link href="/reset-password">
                    <Typography component="span" style={{ fontWeight: "600" }}>
                      Reset Password
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

export default withStyles(styles)(Login);
