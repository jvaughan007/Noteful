import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom';
import Context from '../Context/Context';

class AddNote extends Component {
    static contextType = Context;

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit button at add note component')
        const name = e.target.note.value;
        const content = e.target.content.value; 
        const folderId = e.target.folderId.value;
        console.log(name)        
        console.log(content)
        console.log(folderId)


        const data = {
            name: name,
            content: content,
            modified: new Date(), 
            folderId:folderId
        }

        this.addFolder(data)
    }

    addFolder = (data) => {
        const { history } = this.props;
        fetch(`${this.context.url}/notes/`, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(data)
          }).then(data => {
              this.context.updateStore();
              history.push('/');
          })
    }

    getFolder = () => {
        const { folders } = this.props;
        console.log(this.context.folders)

      return folders.map((folder, i) => {
            return (
                <option 
                    key={i}
                    value={folder.id}
                >
                    {folder.name}
                </option>
            )
        }
            )
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Name of Note:</label>
                    <input type='text' id='note' required/>
                    <label>Content:</label>
                    <input type='text' id='content'/>
                    <label>Folder:</label>
                    <select id='folderId'>
                       {this.getFolder()}
                    </select>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(AddNote);