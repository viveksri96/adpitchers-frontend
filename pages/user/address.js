import {
  Breadcrumbs,
  Button,
  CardActions,
  CardContent,
  Grid,
  Link,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { AddCircleOutline, NavigateNext } from "@material-ui/icons";
import React from "react";
import IsAuthenticated from "../../common/IsAuthenticated";
import AddressForm from "../../components/account/AddressForm";
import { Axios } from "../../config/environment";

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
    height: 250,
    alignItems: "center",
  },
});

export default class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      showForm: false,
      selectedAddress: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let list = await Axios.get("/addresses");
    this.setState({ list: list.data });
  }

  handleModalClose = (address) => {
    if (address && this.state.selectedAddress) {
      this.setState({
        list: this.state.list.map((item) =>
          item.id === address.id ? address : item
        ),
        showForm: false,
        selectedAddress: null,
      });
    } else if (address && !this.state.selectedAddress) {
      this.setState((state) => ({
        list: [address, ...state.list],
        showForm: false,
        selectedAddress: null,
      }));
    } else {
      this.setState({ showForm: false, selectedAddress: null });
    }
  };

  handleClick = (...args) => {
    const [selectedElem, type] = args;
    switch (type) {
      case "create":
        this.setState({ showForm: true });
        break;
      case "update":
        this.setState({ showForm: true, selectedAddress: selectedElem });
        break;
      case "delete":
        Axios.delete(`/address/${selectedElem.id}`).then(() => {
          this.setState((state) => ({
            list: state.list.filter((item) => item.id !== selectedElem.id),
          }));
        });
        break;
    }
  };

  render() {
    const { list, showForm, selectedAddress } = this.state;
    console.log(showForm, list);
    return (
      <IsAuthenticated>
        <div
          style={{
            margin: "32px",
          }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNext fontSize="small" />}
          >
            <Link color="inherit" href="/user/account">
              Your Account
            </Link>
            <Link color="textPrimary">Your Address</Link>
          </Breadcrumbs>
          <Typography variant={"h4"}>Addresses</Typography>
          <Grid container spacing={4} style={{ marginTop: 12 }}>
            {list.map((item) => (
              <Grid item xs={3}>
                <TabCard
                  {...item}
                  handleClick={this.handleClick.bind(this, item)}
                />
              </Grid>
            ))}
            <Grid item xs={3}>
              <TabCard isNew handleClick={this.handleClick.bind(this, null)} />
            </Grid>
          </Grid>
          <AddressForm
            open={showForm}
            selectedAddress={selectedAddress}
            handleModalClose={this.handleModalClose}
          />
        </div>
      </IsAuthenticated>
    );
  }
}

function TabCard({
  full_name,
  mobile_number,
  pincode,
  address_line_1,
  address_line_2,
  landmark,
  city,
  isNew,
  handleClick,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      {isNew ? (
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={handleClick.bind(this, "create")}
        >
          <AddCircleOutline />
          Add a new address
        </div>
      ) : (
        <>
          <CardContent style={{ height: "180px" }}>
            <Typography variant="h6">{full_name}</Typography>
            <Typography variant="body1">{mobile_number}</Typography>
            <Typography variant="body1"></Typography>
            <Typography variant="body2">
              {address_line_1}, {address_line_2}, {pincode}
            </Typography>
            <Typography variant="body2">{landmark}</Typography>
            <Typography variant="body1">{city.name}</Typography>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              disableRipple
              onClick={handleClick.bind(this, "update")}
            >
              Edit
            </Button>
            <Button
              color="secondary"
              disableRipple
              onClick={handleClick.bind(this, "delete")}
            >
              Remove
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
}
