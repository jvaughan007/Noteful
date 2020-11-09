import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Context from "../Context/Context";
import PropTypes from "prop-types";

class Main extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="main">
        <h3 className="notes-title">
          Notes
          <p>
            <Link to={{ pathname: `/add-note` }}>
              <button>add note</button>
            </Link>
          </p>
        </h3>
        {this.props.notes.map((note) => (
          <div key={note.id}>
            <Link key={note.id} to={{ pathname: `/notes/${note.id}` }}>
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

Main.propTypes = {
  history: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
};

export default withRouter(Main);
