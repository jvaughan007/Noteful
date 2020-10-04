import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainView from './Components/Home/Home';
import Note from './Components/Note/Note';
import Folder from './Components/Folder/Folder';
import Nav from './Components/Nav/Nav';
import data from './dummy-store.js';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';

function App() {
  
  const [store] = useState(data);
  console.log(store);
  const {folders, notes} = store

  return (
    <div className="App">
      {/* <Nav /> */}
    <BrowserRouter>
        <Header />
    <Switch>
    <Route exact path='/'>
    <MainView folders={folders} notes={notes}/>
    </Route>
    <Route path='/note/:notes-id'>
    <Note />  
    </Route> 
    <Route path='/folder/:folder-id'>
    <Folder />
    </Route> 
    <Route>
      <NotFound />
    </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
