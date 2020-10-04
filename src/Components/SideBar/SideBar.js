import React from 'react';

export default function SideBar({folders}) {
    console.log(folders);
  return (
      <div>
          <ul>Folders</ul>
          {folders.map(folder => <li key={folder.id}>{folder.name}</li>)}
      </div>
  )
}

