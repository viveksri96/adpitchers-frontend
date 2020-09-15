import { Typography, Grid, Button, CardActionArea, CardMedia, Card, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Typewriter from 'typewriter-effect';

const styles = {
  root:{
    padding: 50,
    background: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 500
  },
  headerContainer: {
    textAlign: 'center',
    margin: 50
  },
  divider: {
    width: '100%',
    margin: '24px 0',
    borderTopWidth: '0px'
  },
  titleText:{
    fontWeight: 16,
    color: '#121037',
    marginBottom: 16,
  },
  productDetailContainer: {
    width: '100%',
    textAlign: "center"
  },
  categoryCardContainer: {
    margin: '32px 0px'
  },
  categoryCard: {
    alignItems: 'center',
    backgroundColor: '#e8eaf6',
    '& > button': {
      height: 200
    }
  },
  categoryLogo: {
    width: 50,
    height: 50,
    margin: '0 auto',
    objectFit: 'unset',
    marginBottom: 50
  }
}

function Home({classes}) {
  return (
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
          <Button variant="contained" size="large" color="primary">Create an Ad</Button>
          <Button size="large" color="secondary">Explore Ads</Button>
        </div>
      </Grid>
      <hr className={classes.divider} />
      <Grid item className={classes.productDetailContainer}>
        <Grid container>
          <Typography variant="h4" align="center">Explore by Category</Typography>
          <Grid container spacing={2} className={classes.categoryCardContainer}>
            {
              [ 
                {
                  name: 'Newspaper',
                  image: "https://www.uokpl.rs/fpng/f/368-3682561_clipart-png-paper.png",
                  href: "/listing"
                },
                {
                  name: 'Printing',
                  image: 'https://www.uokpl.rs/fpng/f/575-5750016_the-printing-press.png',
                  href: "/listing"
                },
                {
                  name: "Billboard",
                  image: "https://www.uokpl.rs/fpng/f/164-1648556_billboard-png-file.png",
                  href: "/listing"
                }
                
              ].map(item => (
                <Grid item xs={2}>
                  <Link href={item.href}> 
                    <Card className={classes.categoryCard}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          src={item.image} 
                          alt="cardlist"
                          className={classes.categoryLogo}
                        />
                        <Typography variant="h6">{item.name}</Typography>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
      {/* <hr className={classes.divider} /> */}
    </Grid>
  )
}

export default withStyles(styles)(Home)