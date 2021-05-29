import { Link } from "@material-ui/core";
import React from "react";
import { createEnv } from "../config/environment";

export default class IsAuthenticated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("adpitchers_token");
    if (token) {
      createEnv({ token });
      this.setState({ isAuthenticated: true });
    } else {
      this.setState({ isAuthenticated: false });
    }
  }

  render() {
    const { isAuthenticated } = this.state;
    return isAuthenticated ? (
      this.props.children
    ) : (
      <div
        style={{
          width: "100%",
          height: "100vh",
          textAlign: "center",
          transform: `translateY(40%)`,
        }}
      >
        You are not authorized to view this page please{" "}
        <Link href="/login">login</Link>
      </div>
    );
  }
}
