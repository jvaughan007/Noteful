import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <ul>Folders</ul>
        {this.props.folders.map((folder) => (
          <Link key={folder.id} to={{ pathname: `/folder/${folder.id}` }}>
            <li>{folder.name}</li>
          </Link>
        ))}
      </div>
    );
  }
}
