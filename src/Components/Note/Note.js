import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import Context from "../../Context/Context";

export default class Note extends Component {
  static contextType = Context;

  render() {
    const { match } = this.props;
    const { notes, folders } = this.context;
    const notesId = match.params.notesId;
    console.log(notesId, notes);

    const note = notes.filter((note) => note.id === notesId);
    console.log(note);

    const folderId = note[0].folderId;
    console.log(folderId);

    const targetFolder = folders.filter((folder) => folder.id === folderId);
    console.log(targetFolder);

    return (
      <div>
        <SideBar targetFolder={targetFolder} />
        <h3>Name: {note[0].name}</h3>
        <p>Date Modified: {note[0].modified} </p>
        <p>Content:</p>
        <p>{note[0].content}</p>
      </div>
    );
  }
}
