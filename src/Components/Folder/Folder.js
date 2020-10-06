import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";

export default class Folder extends Component {
  render() {
    const { match, folders, notes } = this.props;
    console.log(match);
    const folderId = match.params.folderId;
    console.log("this is folderId", folderId);
    return (
      <div>
        <SideBar folders={folders} />
        <Main notes={notes.filter((note) => note.folderId === folderId)} />
      </div>
    );
  }
}
