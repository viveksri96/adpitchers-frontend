import {
  Button,
  Card,
  Container,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import React from "react";
import { CartItem } from "../common/CartItem";

export default class Cart extends React.Component {
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
      <Container maxWidth="lg" style={{ margin: "16px auto" }}>
        <Typography variant="h5">
          <b>My Bag</b>
        </Typography>
        <Grid container spacing="4">
          <Grid item xs={7} style={{ flexDirection: "column" }}>
            <CartItem items={cart.items} />
          </Grid>
          <Grid item xs={5}>
            <Card
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 16,
              }}
            >
              <div>
                <Typography>Total</Typography>
                <Typography>
                  <b>499$</b>
                </Typography>
              </div>
              <Link href="/checkout/order-summary">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    width: 250,
                    color: "white",
                  }}
                >
                  <Typography variant="h6">Checkout</Typography>
                </Button>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
