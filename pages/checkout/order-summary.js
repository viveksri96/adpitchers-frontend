import { Button } from "@material-ui/core";
import React from "react";

const options = {
  key: "rzp_test_XoOpqWK3xGFo5r", // Enter the Key ID generated from the Dashboard
  amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency: "INR",
  name: "Acme Corp",
  description: "Test Transaction",
  image:
    "https://tl.vhv.rs/dpng/s/416-4160680_from-liquipedia-playerunknowns-battlegrounds-wiki-logo-png-for.png",
  order_id: "order_H7Cerzmx0hGE6l", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  callback_url: "http://localhost:3000/order-success",
  prefill: {
    name: "Gaurav Kumar",
    email: "gaurav.kumar@example.com",
    contact: "9344290493",
  },
  notes: {
    address: "Razorpay Corporate Office",
  },
  theme: {
    color: "#3399cc",
  },
};

export default class OrderSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.rzp = {};
  }

  componentDidMount() {
    this.rzp = new window.Razorpay(options);
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.rzp.open()}>Pay</Button>
      </div>
      // <Container maxWidth="lg" style={{ margin: "16px auto" }}>
      //   <Typography variant="h5">
      //     <b>Order Summary</b>
      //   </Typography>
      //   <Grid container spacing="4">
      //     <Grid item xs={7} style={{ flexDirection: "column" }}>
      //       <CartItem />
      //       <CartItem />
      //     </Grid>
      //     <Grid item xs={5}>
      //       <Card
      //         style={{
      //           display: "flex",
      //           justifyContent: "space-between",
      //           padding: 16,
      //         }}
      //       >
      //         <div>
      //           <Typography>Total</Typography>
      //           <Typography>
      //             <b>499$</b>
      //           </Typography>
      //         </div>
      //         <Button
      //           variant="contained"
      //           style={{ width: 250, backgroundColor: "#808080a6" }}
      //         >
      //           <Typography variant="h6">
      //             <Link
      //               href="/checkout/order-summary"
      //               style={{ color: "white" }}
      //             >
      //               Continue
      //             </Link>
      //           </Typography>
      //         </Button>
      //       </Card>
      //     </Grid>
      //   </Grid>
      // </Container>
    );
  }
}

// const CartItem = () => {
//   return (
//     <Paper style={{ marginTop: 16 }}>
//       <Grid container style={{ padding: 16 }}>
//         <Grid item xs={8}>
//           <Typography>Jet Black Lightweight Men's Slide</Typography>
//           <Typography>
//             <b>499$</b>
//           </Typography>
//         </Grid>
//         <Grid
//           item
//           xs={4}
//           style={{ display: "flex", justifyContent: "flex-end" }}
//         >
//           <img
//             href="https://images.bewakoof.com/t320/jet-black-lightweight-men-s-slider-men-s-plain-sliders-lightweight-271396-1600059720.jpg"
//             width="100"
//             height="150"
//           />
//         </Grid>
//       </Grid>
//       {/* <Button>Remove</Button> */}
//     </Paper>
//   );
// };
