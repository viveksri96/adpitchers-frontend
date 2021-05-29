import { Grid, Link } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    maxWidth: 450,
    maxHeight: 200,
    padding: 16,
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#ffe4c47a",
    },
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginLeft: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid
        container
        style={{
          justifyContent: "space-around",
          height: "500px",
          margin: "100px 0px",
        }}
      >
        <Grid item xs={3}>
          <Link href={"/user"}>
            <TabCard
              img={"/assets/login_and_security.svg"}
              label={"Login and security"}
            />
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link href={"/user/order-history"}>
            <TabCard img={"/assets/order.svg"} label={"Orders"} />
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link href={"/user/address"}>
            <TabCard img={"/assets/address.svg"} label={"Address"} />
          </Link>
        </Grid>
      </Grid>
    );
  }
}

function TabCard({ img, label }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <img src={img} width="100" height="100" />
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        {label}
      </Typography>
    </Card>
  );
}
