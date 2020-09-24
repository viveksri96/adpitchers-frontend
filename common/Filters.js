import React from 'react'
import { 
  Grid, 
  Slider, 
  Typography, 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField
  // ExpandMoreIcon
} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const plusIcon = (<b>+</b>)
const styles = {
  root: {
    // borderRight: '2px solid #ddd',
    marginRight: 20,
    marginTop: 20,
    padding: 10,
    // height: 100
  },
  filterText: {
    fontWeight: 600,
    marginBottom: 20
  },
  locationContainer: {
    width: '100%'
  },
  filterName: {
    fontWeight: 'bold',
    
  },
  clearAllText: {
    float: 'right',
    lineHeight: 2.5,
    cursor: 'pointer',
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
        <Typography variant="h5" className={classes.filterText} component="div">
            Filters 
            <Typography component="span" color="primary" className={classes.clearAllText}>Clear All</Typography>
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={plusIcon}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.filterName}>Categories</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField 
              placeholder="Search Categories"
              variant="outlined"
              size="small"
              fullWidth
              onChange={console.log}
            />  
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={plusIcon}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.filterName}>Location </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={plusIcon}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.filterName}>Location Range</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              value={[50, 60]}
              onChange={this.handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              // getAriaValueText={valuetext}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={plusIcon}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.filterName}>Ratings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              value={[50, 60]}
              onChange={this.handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              // getAriaValueText={valuetext}
            />
          </AccordionDetails>
        </Accordion>
      </div>
    )
  }
}


export default withStyles(styles)(Filters)