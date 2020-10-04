import React from 'react';
import {Link} from 'react-router-dom';

export default function SideBar({folders}) {
    console.log(folders);
  return (
      <div>
          <ul>Folders</ul>
          {folders.map(folder => 
          <Link key={folder.id} to={{pathname: `/folder/${folder.id}`}}>
          <li>{folder.name}</li>
          </Link>)}
      </div>
  )
}

