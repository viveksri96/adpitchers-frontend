import { withStyles } from "@material-ui/styles"
import { Grid, TextField, Button, Typography, Link } from "@material-ui/core"

const styles = {
  passwordResetContainer: {
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    maxWidth: '600px',
    minHeight: 'calc(100vh - 60px)',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 10px',
  },
  newAccText:{
    color: "#546e7a",
  }
}

function ResetPassword(props){
  const {classes} = props
  return (
    <Grid container className={classes.passwordResetContainer} spacing={2}>
      <Grid item>
        <Typography variant="h3" style={{fontWeight: 'bold'}}>Password reset</Typography>
      </Grid>
      <Grid item className={classes.newAccText}>
        <Typography variant="h6" >
          Enter your email to reset the password.
        </Typography>
      </Grid>
      <TextField fullWidth margin="normal" label="E-mail" variant="outlined" required />
      <Grid container>
        <Typography align="left" variant="caption"><em>Fields that are marked with * sign are required.</em></Typography>
      </Grid>
      <Button style={{marginTop: 20}} fullWidth size="large" variant="contained" color="primary">Reset password</Button>
      <Grid item>
        <Typography variant="body1" className={classes.newAccText}>
          Remember your password? <Link href="/login"><Typography component="span" style={{fontWeight: '600'}}>Log in</Typography></Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(ResetPassword)