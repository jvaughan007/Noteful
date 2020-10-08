import React, { Component } from 'react';
import Context from '../Context/Context';
import { withRouter } from 'react-router-dom';


 class AddForm extends Component {
    static contextType = Context;
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.context.url); 
       const name = e.target.name.value
        this.addFolder({name: name})
    }

    addFolder = (name) => {
        const { history } = this.props
        fetch(`${this.context.url}/folders/`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(name)
          }).then(data => {
             this.context.updateStore()
             history.push('/')
    }).catch((e) => {
    console.log(e.message)
    })
}

    render () {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" id="name" placeholder="Name of folder"></input>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default withRouter(AddForm)