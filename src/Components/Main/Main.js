import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Context from "../../Context/Context";

class Main extends Component {
  static contextType = Context;

  render() {
    return (
      <div>
        <h3>
          Notes
          <p>
            <button>add note</button>
          </p>
        </h3>
        {this.props.notes.map((note) => (
          <div key={note.id}>
            <Link key={note.id} to={{ pathname: `/note/${note.id}` }}>
              <h3>Name: {note.name}</h3>
            </Link>
            <p>Date modified: {note.modified}</p>
            <button
              onClick={() => {
                this.context.deleteNote(note.id);
                this.props.history.push("/");
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Main);
