import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Home extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

Home.propTypes = {
  children: PropTypes.array.isRequired,
};
