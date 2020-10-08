import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Context from "../Context/Context";

class SideBar extends Component {
  static contextType = Context;
  render() {
    const template = this.props.folders ? (
      <div>
        <ul className="folder-list-ul"></ul>
        {this.props.folders.map((folder) => (
          <Link key={folder.id} to={{ pathname: `/folder/${folder.id}` }}>
            <li className="folder-list">{folder.name}</li>
          </Link>
        ))}
      </div>
    ) : (
      <>
        <h3>{this.props.targetFolder[0].name}</h3>
        <button
          type="button"
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Back
        </button>
      </>
    );
    return (
      <div>
        <div className="sidebar">
          <h3 className="folder-title">
            Folders
            <p>
              <Link to={{pathname: '/add-folder'}}>
              <button>Add Folder</button>
              </Link>
            </p>
          </h3>
          {template}
        </div>
      </div>
    );
  }
}

export default withRouter(SideBar);
