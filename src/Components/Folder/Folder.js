import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";
import Context from "../../Context/Context";

export default class Folder extends Component {
  static contextType = Context;

  render() {
    const { folders, notes } = this.context;
    const { match } = this.props;
    const folderId = match.params.folderId;
    console.log(folderId);

    return (
      <div>
        <SideBar folders={folders} />
        <Main
          notes={notes.filter((note) => {
            return folderId.includes(note.folderId);
          })}
        />
      </div>
    );
  }
}
