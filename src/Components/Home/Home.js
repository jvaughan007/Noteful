import React from 'react';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';
// import {Route} from 'react-router-dom';

export default function MainView({folders, notes}) {
    console.log(folders, notes)
    return (
        <div>
           <SideBar folders={folders} />
           <Main notes={notes} />
        </div>
    )
}