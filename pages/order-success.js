import { Container, Typography } from "@material-ui/core";
import React from "react";

export default class OrderSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container maxWidth="lg" style={{ margin: "16px auto" }}>
        <Typography variant="h1">Sucess</Typography>
      </Container>
    );
  }
}
