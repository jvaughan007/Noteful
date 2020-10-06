import React, { Component } from "react";

export default class Note extends Component {
  render() {
    const { match, notes } = this.props;
    const notesId = match.params.notesId;
    console.log(notesId, notes);

    const note = notes.filter((note) => note.id === notesId);
    console.log(note);

    return (
      <div>
        <h3>Name: {note[0].name}</h3>
        <p>Date Modified: {note[0].modified} </p>
        <p>Content:</p>
        <p>{note[0].content}</p>
      </div>
    );
  }
}
