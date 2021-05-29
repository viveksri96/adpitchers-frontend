import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
import moment from "moment";
import React from "react";
import { CartItem } from "../../common/CartItem";

export default class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {
        items: [
          {
            id: 10,
            img: "/assets/billboard_default.png",
            price: 99,
            bookingDate: [moment(), moment()],
            total: 999,
          },
          {
            id: 10,
            img: "/assets/billboard_default.png",
            price: 99,
            bookingDate: [moment(), moment()],
            total: 999,
          },
          {
            id: 10,
            img: "/assets/billboard_default.png",
            price: 99,
            bookingDate: [moment(), moment()],
            total: 999,
          },
        ],
      },
    };
  }

  render() {
    const { cart } = this.state;
    return (
      <div style={{ width: "700px", margin: "40px auto" }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNext fontSize="small" />}
        >
          <Link color="inherit" href="/user/account">
            Your Account
          </Link>
          <Link color="textPrimary">Your Order</Link>
        </Breadcrumbs>
        <Typography variant={"h4"}>Orders</Typography>
        <CartItem items={cart.items} />
      </div>
    );
  }
}
