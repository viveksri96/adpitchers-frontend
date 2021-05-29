import {
  Card,
  CardContent,
  Grid,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { BookmarkBorder } from "@material-ui/icons";
import Pagination from "@material-ui/lab/Pagination";
import { withStyles } from "@material-ui/styles";
import Carousel from "react-material-ui-carousel";
import Filters from "../common/Filters";
import { Axios } from "../config/environment";

const styles = {
  root: {},
  listingContainer: {
    // maxWidth: 1000,
    marginTop: 16,
  },
  listDetailContainer: {
    margin: "16px 0",
  },
  showingofText: {
    marginBottom: "16px",
  },
  chipContainer: {
    marginRight: 6,
  },
  cardContainer: {
    maxWidth: 300,
  },
  paginationContainer: {
    "& ul": {
      justifyContent: "center",
    },
    margin: "16px 0",
  },
  loaderContainer: {
    height: "600px",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  indicatorContainer: {
    position: "absolute",
    bottom: "0px",
  },
};

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      paging: {},
      list: [],
      loading: true,
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData = (filterData) => {
    let filters = {};
    if (filterData) {
      const { price, range } = filterData;
      filters = {
        min_price: price[0],
        max_price: price[1],
        r: range,
      };
    }
    this.setState({ loading: true });

    Axios.get(`/billboards`, {
      params: {
        page: this.state.page,
        ...filters,
      },
    }).then((res) => {
      this.setState({
        list: res.data.data,
        paging: res.data.paging,
        loading: false,
      });
    });
  };

  handlePagination = (e, page) => {
    this.setState({ page }, this.getData);
  };

  render() {
    const { classes } = this.props;
    const { list, paging, loading } = this.state;
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={3}>
          <Filters onFilterChange={this.getData} />
        </Grid>
        <Grid item xs={9} className={classes.listingContainer}>
          <Grid container className={classes.listDetailContainer}>
            <Typography
              variant="h5"
              margin="dense"
              className={classes.showingofText}
            >
              Showing {list.length} of {paging.total_items}
            </Typography>
            <Grid container>
              <Grid item xs={8}>
                {/* Can have chips later */}
              </Grid>
              <Grid item xs={4}>
                <Select value={"recommended"} onChange={console.log}>
                  <MenuItem value={"newest"}>Sort by Newest</MenuItem>
                  <MenuItem value={"recommended"}>Sort by Recommended</MenuItem>
                  <MenuItem value={"hl"}>Sort by Price(high to low)</MenuItem>
                  <MenuItem value={"lh"}>Sort by Price(low to high)</MenuItem>
                  <MenuItem value={"booked"}>Sort by Mostly booked</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {!loading ? (
              list && list.length > 0 ? (
                list.map((billboard) => (
                  <Grid item key={billboard.id}>
                    <Link href={`/pd/${billboard.id}`}>
                      <Card className={classes.cardContainer}>
                        <Carousel
                          // autoPlay={false}
                          className={classes.carouselContainer}
                          indicatorContainerProps={{
                            className: classes.indicatorContainer,
                          }}
                        >
                          {billboard.billboard_image.map((item, i) => (
                            <img
                              key={item.filename}
                              width="300"
                              height="200"
                              src={item.url}
                            />
                          ))}
                        </Carousel>
                        <CardContent>
                          <Typography
                            variant="body1"
                            style={{ fontWeight: 600 }}
                          >
                            {/*{billboard.location || "Lucknow, India"}{" "}*/}
                            <span style={{ float: "right", color: "#c4bbbb" }}>
                              <BookmarkBorder />
                            </span>
                          </Typography>
                          <Typography variant="body2">
                            {"lorem ipsum" || billboard.description}
                          </Typography>
                          <Typography
                            variant="body1"
                            style={{ color: "#c4bbbb" }}
                          >
                            &#8377; {(+billboard.price).toFixed(2)}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </Grid>
                ))
              ) : (
                <div
                  style={{
                    backgroundImage: `url(/assets/result_not_found.webp)`,
                    width: 500,
                    height: 500,
                    backgroundSize: "cover",
                    margin: "0 auto",
                    marginBottom: 250,
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <Typography style={{ textAlign: "center" }}>
                    We searched everywhere, but you could try searching for
                    something less specific.
                  </Typography>
                </div>
              )
            ) : (
              <div className={classes.loaderContainer}>
                <div>
                  <img src={"/assets/loader-32.svg"} />
                </div>
                <Typography align="center" variant="body2">
                  <em>
                    Finding the best <br /> billboard.
                  </em>
                </Typography>
              </div>
            )}
          </Grid>
          <Pagination
            className={classes.paginationContainer}
            count={paging.total_pages}
            onChange={this.handlePagination}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Listing);
