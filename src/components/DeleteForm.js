import React, { Component } from 'react';
import axios from 'axios';

class DeleteForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id: ''
     
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

      handleDelete = (id) => {
          console.log(this.state);
          axios.delete(`http://myapi-profstream.herokuapp.com/api/258ce2/wines/${this.state}`)
          .then(response => {
              console.log(response);
          })
      }

      submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.delete(`http://myapi-profstream.herokuapp.com/api/258ce2/wines/${this.state.id}`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

      }
    render() {
        const {id} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="Enter ID to delete" name="id" value={id} onChange={this.changeHandler}></input> 
                    <button type="submit" >Delete</button>
                    
                </form>
            </div>
        )
    }
}

export default DeleteForm;
