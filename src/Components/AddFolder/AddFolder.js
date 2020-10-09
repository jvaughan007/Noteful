import React, { Component } from "react";
import Context from "../Context/Context";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class AddForm extends Component {
  static contextType = Context;

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.context.url);
    const name = e.target.name.value;
    this.addFolder({ name: name });
  };

  addFolder = (name) => {
    const { history } = this.props;
    fetch(`${this.context.url}/folders/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(name),
    })
      .then((data) => {
        this.context.updateStore();
        history.push("/");
      })
      .catch((e) => {
        throw new Error("new folder creation failed");
      });
  };

  render() {
    return (
      <div className="add-folder">
        <h3>Add Folder</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p>Name</p>
          <input type="text" id="name" placeholder="Name of folder"></input>
          <p>
            <button type="submit">Submit</button>
            <button onClick={this.props.history.goBack} type="cancel">
              Cancel
            </button>
          </p>
        </form>
      </div>
    );
  }
}

AddForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(AddForm);
