import React, { Component } from 'react';
import axios from 'axios';

class DeleteForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            year: '',
            grapes: '',
            country: '',
            region: '',
            description: '',
            picture:'',
            price: ''
     
         }
    }
    
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
      }
    
      deleteHandler = (e) => {
          let id = this.state.info.id;
        e.preventDefault()
        console.log(this.state)
        axios.post('http://myapi-profstream.herokuapp.com/api/258ce2/wines'+id, this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

      }

      handleDelete = (itemId) => {
          axios.delete("http://myapi-profstream.herokuapp.com/api/258ce2/wines", {params: {id: itemId}})
          .then(response => {
              console.log(response);
          })
      }
    render() {
        return (
            <div>
                <form onSubmit={this.deleteHandler}>
                    <input type="text" id="" onSubmit={this.deleteHandler}></input> 
                    <button onClick={this.props.handleDelete}>Delete</button>
                    
                </form>
            </div>
        )
    }
}

export default DeleteForm;
