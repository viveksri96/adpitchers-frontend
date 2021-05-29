import {
  Button,
  Card,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container maxWidth="lg" style={{ margin: "16px auto" }}>
        <Typography variant="h5">
          <b>My Bag</b>
        </Typography>
        <Grid container spacing="4">
          <Grid item xs={7} style={{ flexDirection: "column" }}>
            <CartItem />
            <CartItem />
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
                  style={{
                    width: 250,
                    backgroundColor: "#808080a6",
                    color: "white",
                  }}
                >
                  <Typography variant="h6">Continue</Typography>
                </Button>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const CartItem = () => {
  return (
    <Paper style={{ marginTop: 16 }}>
      <Grid container style={{ padding: 16 }}>
        <Grid item xs={8}>
          <Typography>Jet Black Lightweight Men's Slide</Typography>
          <Typography>
            <b>499$</b>
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <img
            href="https://images.bewakoof.com/t320/jet-black-lightweight-men-s-slider-men-s-plain-sliders-lightweight-271396-1600059720.jpg"
            width="100"
            height="150"
          />
        </Grid>
      </Grid>
      {/* <Button>Remove</Button> */}
    </Paper>
  );
};
