import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class SideBar extends Component {
  render() {
    const template = this.props.folders ? (
      <div>
        <ul>Folders</ul>
        {this.props.folders.map((folder) => (
          <Link key={folder.id} to={{ pathname: `/folder/${folder.id}` }}>
            <li>{folder.name}</li>
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
    return <>{template}</>;
  }
}

export default withRouter(SideBar);
