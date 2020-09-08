import { Typography, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Typewriter from 'typewriter-effect';

const styles = {
  root:{
    padding: 50,
    background: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500
  },
  headerContainer: {
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    margin: '24px 0',
  },
  titleText:{
    fontWeight: 16,
    color: '#121037',
    marginBottom: 16
  },
  productDetailContainer: {
    width: '100%',
    textAlign: "center"
  }
}

function Home({classes}) {
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item className={classes.headerContainer}>
          <Typography variant="h2" className={classes.titleText}>
            One stop solution to all your <br />
            <Typewriter
              options={{
                strings: 'advertisement.',
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
          <Typography variant="h5">
            Adpitchers will make your product look modern and professional while saving you precious time.
          </Typography>
          <div style={{marginTop: 24}}>
            <Button variant="outlined" size="large">Post a bid</Button>
            <Button variant="primary" size="large" color="primary">Book a Billboard</Button>
          </div>
        </Grid>
        <hr className={classes.divider} />
        <Grid item className={classes.productDetailContainer}>
          <Grid container>
            <Grid item>
              <Typography variant="h4">Explore by Category</Typography>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default withStyles(styles)(Home)