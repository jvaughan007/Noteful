import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";

export default class Folder extends Component {
  // const {folderId} = match.params;

  render() {
    return (
      <div>
        <SideBar folders={this.props.folders} />
        <Main notes={this.props.notes} />
      </div>
    );
  }
}
