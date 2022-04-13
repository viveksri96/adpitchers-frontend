import { Breadcrumbs, Button, Grid, Link, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import moment from "moment";
import { useRef } from "react";
import { DateRangePicker } from "react-date-range";
import Carousel from "react-material-ui-carousel";
import MoreDetails from "../../components/productListing/MoreDetails";
import { Axios, createEnv } from "../../config/environment";
import Login from "../login";
export default class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newSlot: [],
      slots: [],
      newFocusedRange: 0,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("adpitchers_token");
    if (token) {
      createEnv({ token: token });
      this.getSlot(this.props.details.id);
    } else {
      this.setState({ showLogin: true });
    }
  }

  async getSlot(id) {
    let slots = await Axios.get(`/billboard/${id}/slots`).catch(console.log);
    this.setState({ slots: slots.data });
  }

  handleSlot = (value) => {
    this.setState({
      newSlot: Object.values(value),
      newFocusedRange: Object.keys(value)[0],
    });
  };

  render() {
    let { showLogin, slots, newSlot, newFocusedRange } = this.state;
    return (
      <div>
        {showLogin ? (
          <Login stayOnSamePage={true} />
        ) : (
          <BillboardDetailPage
            details={this.props.details || {}}
            slots={[...slots, ...newSlot]}
            handleSlot={this.handleSlot}
            newFocusedRange={newFocusedRange}
          />
        )}
      </div>
    );
  }
}

const BillboardDetailPage = withStyles({
  productDetailContainer: {
    padding: "24px 16px",
  },
  headerLeftItem: {
    display: "flex",
    justifyContent: "center",
  },
  rangeDatePicker: {
    justifyContent: "center",
    "& .rdrDefinedRangesWrapper": {
      display: "none",
    },
  },
  slideContainer: {
    height: 600,
  },
})(({ classes, details, slots = [], handleSlot, newFocusedRange }) => {
  slots = slots.map((slot, i) => {
    return {
      startDate: slot.startDate || moment(slot.start_date).toDate(),
      endDate: slot.endDate || moment(slots.end_date).toDate(),
      selection: `selection:${i}`,
      color: slot.startDate ? "blue" : "#c5bdbd6b",
      key: i,
      disabled: true,
      showDateDisplay: false,
    };
  });

  const datePickerElem = useRef(null);

  return (
    <Grid container spacing={2} className={classes.productDetailContainer}>
      <Grid container spacing={2} style={{ justifyContent: "space-around" }}>
        <Grid item xs={6} className={classes.headerLeftItem}>
          <Grid container>
            <Carousel
              autoPlay={false}
              // animation="slide"
              className={classes.slideContainer}
            >
              {details.billboard_image.map((item, i) => (
                <div
                  style={{
                    backgroundImage: `url("${item.url}")`,
                    width: 900,
                    height: 600,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
              ))}
            </Carousel>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container style={{ flexDirection: "column" }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/">
                Home
              </Link>
              <Link color="inherit" href="/listing">
                Shop
              </Link>
              <Typography color="textPrimary">Hoarding</Typography>
            </Breadcrumbs>
            <Typography
              variant="h3"
              component="div"
              style={{ margin: "12px 0" }}
            >
              <b>Panton tunion Chair</b>
            </Typography>
            <Typography
              variant="h5"
              component="div"
              style={{ color: "orange", marginBottom: 12 }}
            >
              <b>$8999</b>
            </Typography>
            <Typography variant="caption" component="div">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look li
            </Typography>
            <hr style={{ width: "100%", margin: "12px 0", opacity: "30%" }} />
            <Typography
              variant="h6"
              component="div"
              color="primary"
              style={{ marginBottom: 12 }}
            >
              <b>Select Dates </b>
              <span style={{ fontSize: 12, color: "black" }}>
                (Select dates to check availbility)
              </span>
            </Typography>
            <DateRangePicker
              ranges={slots}
              focusedRange={[slots.length - 1, 0]}
              rangeColors={["red", "blue", "green"]}
              minDate={new Date()}
              onChange={handleSlot}
              className={classes.rangeDatePicker}
            />

            <Link href="/cart" style={{ width: "100%" }}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  margin: "12px 0",
                }}
              >
                <b>Book Now</b>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <MoreDetails />
    </Grid>
  );
});

export async function getServerSideProps({ params }) {
  const res = await Axios.get(`/billboard/${params["item-details"]}`).catch(
    console.log
  );
  return {
    props: {
      details: res.data,
    },
  };
}
