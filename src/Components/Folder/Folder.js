import React from 'react'; 
import SideBar from '../SideBar/SideBar'; 
import Main from '../Main/Main';

export default function Folder({folders, notes}) {
    return (
        <div>
           <SideBar folders={folders}/>
           <Main notes={notes}/>
        </div>
    )
}