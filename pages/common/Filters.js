import React from 'react'
import { Grid, Slider, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    borderRight: '2px solid #ddd',
    marginRight: 20,
    marginTop: 20,
    padding: 10,
    // height: 100
  },
  locationContainer: {
    width: '100%'
  }
}

class Filters extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    const {classes} = this.props
    return(
      <div className={classes.root} >
        <div>
          <Typography>Category</Typography>
        </div>
        <div>
          <Typography>Location </Typography>
        </div>
        <div>
        <Typography>Ratings</Typography>
        </div>
        <div className={classes.locationContainer}>
          <Typography>Location Range</Typography>
          <Slider
            value={[50, 60]}
            onChange={this.handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            // getAriaValueText={valuetext}
          />
        </div>
      </div>
    )
  }
}


export default withStyles(styles)(Filters)