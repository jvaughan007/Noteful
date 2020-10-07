import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Note from "./Components/Note/Note";
import Folder from "./Components/Folder/Folder";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";
import Context from "./Context/Context";

class App extends Component {
  state = {
    folders: [],
    notes: [],
    url: "http://localhost:9090",
    updateStore: () => {
      this.getFolders();
      this.getNotes();
    },
  };

  getFolders = () => {
    fetch(`${this.state.url}/folders`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          folders: data,
        });
      });
  };

  getNotes = () => {
    fetch(`${this.state.url}/notes`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          notes: data,
        });
      });
  };

  deleteNote = (id) => {
    console.log(this.state.url, id);
    fetch(`${this.state.url}/notes/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((data) => {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({
          notes: notes,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount() {
    this.state.updateStore();
  }

  render() {
    console.log(this.state.folders);
    console.log(this.state.notes);
    return (
      <Context.Provider value={{ ...this.state, deleteNote: this.deleteNote }}>
        <div className="App">
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home>
                  <SideBar folders={this.state.folders} />
                  <Main notes={this.state.notes} />
                </Home>
              </Route>
              <Route path="/note/:notesId" component={Note}></Route>
              <Route path="/folder/:folderId" component={Folder}></Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
