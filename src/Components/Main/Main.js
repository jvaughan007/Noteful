import React from 'react'; 

export default function Main({notes}) {
    return(
        <div>
            {notes.map(note => 
            <div key={note.id}>
            <h3>Name: {note.name}</h3>
            <p>Date modified: {note.modified}</p>
            </div>)}
        </div>
    )
}