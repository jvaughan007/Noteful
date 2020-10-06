import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";

export default class Folder extends Component {
  //  const id = this.props.match.params;
  render() {
    //   console.log(id)
    return (
      <div>
        <SideBar folders={this.props.folders} />
        <Main notes={this.props.notes} />
      </div>
    );
  }
}
