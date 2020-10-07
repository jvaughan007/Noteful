import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Context from "../../Context/Context";

class SideBar extends Component {
  static contextType = Context;
  render() {
    const template = this.props.folders ? (
      <div>
        <ul>
          <h3>Folders</h3>
        </ul>
        <p>
          <button>Add Folder</button>
        </p>
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
