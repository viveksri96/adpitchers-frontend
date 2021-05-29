import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Slider,

  // ExpandMoreIcon
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { _throttle } from "./helpers";

const plusIcon = <b>+</b>;
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
    marginBottom: 20,
  },
  locationContainer: {
    width: "100%",
  },
  filterName: {
    fontWeight: "bold",
  },
  clearAllText: {
    float: "right",
    lineHeight: 2.5,
    cursor: "pointer",
  },
};

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterData: {
        range: 0,
        price: [0, 100],
      },
    };
    this.onChange = _throttle(this.props.onFilterChange);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(() => {
        this.setState();
      });
    } else {
      alert("Please enable you location for us to show you better results.");
    }
  }

  handleChange = (e, value) => {
    this.setState({ startPrice: value[0], endPrice: value[1] });
  };

  handleSlider(type, e, value) {
    const { filterData } = this.state;
    filterData[type] = value;
    this.setState({ filterData }, () => this.onChange(this.state.filterData));
  }

  render() {
    const { classes } = this.props;
    const { filterData } = this.state;
    return (
      <div className={classes.root}>
        <Typography variant="h5" className={classes.filterText} component="div">
          Filters
          <Typography
            component="span"
            color="primary"
            className={classes.clearAllText}
          >
            Clear All
          </Typography>
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.filterName}>Price</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              value={filterData.price}
              onChange={this.handleSlider.bind(this, "price")}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              marks={[
                { value: 0, label: "0" },
                { value: 100, label: "100+" },
              ]}
              // getAriaValueText={valuetext}
            />
          </AccordionDetails>
        </Accordion>
        {/*<Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.filterName}>Location </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>*/}
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            step="5"
          >
            <Typography className={classes.filterName}>
              Range (in kms)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              value={filterData.range}
              onChange={this.handleSlider.bind(this, "range")}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              // getAriaValueText={valuetext}
            />
          </AccordionDetails>
        </Accordion>
        {/*<Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
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
        </Accordion>*/}
      </div>
    );
  }
}

export default withStyles(styles)(Filters);
