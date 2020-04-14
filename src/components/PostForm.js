import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
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
    
      submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://myapi-profstream.herokuapp.com/api/258ce2/wines', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

      }
    render() {
        const {name, year, grapes, country, region, description, picture, price } =this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="name" value={name} onChange={this.changeHandler}></input><br/>
                    <input type="number" name="year" value={year} onChange={this.changeHandler}></input><br/>
                    <input type="text" name="grapes" value={grapes} onChange={this.changeHandler}></input><br/>
                    <input type="text" name="country" value={country}onChange={this.changeHandler}></input><br/>
                    <input type="text" name="region" value={region} onChange={this.changeHandler}></input><br/>
                    <input type="text" name="description" value={description} onChange={this.changeHandler}></input><br/>
                    <input type="text" name="picture" value={picture} onChange={this.changeHandler}></input><br/>
                    <input typer="number" name="price" value={price} onChange={this.changeHandler}></input><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;
