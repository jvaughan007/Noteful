import React, { Component } from 'react'; 

export default class AddNote extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Name of Note:</label>
                    <input type='text' id='note' required/>
                    <label>Content:</label>
                    <input type='text' id='content'/>
                    <label>Folder:</label>
                    <select>
                        <option value='folder1'/>
                    </select>
                    <button type='submit' />
                </form>
            </div>
        )
    }
}