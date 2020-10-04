import React from 'react'; 
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <Link to='/'>
                Main Page
            </Link>
            <Link to='/note'>
                Notes Route
            </Link>
            <Link to='/folder'>
                Folder Route
            </Link>
        </div>
    )
}