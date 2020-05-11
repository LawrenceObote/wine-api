import React, { Component } from 'react';
import axios from 'axios';
import PostForm from './components/PostForm';
import DeleteForm from "./components/DeleteForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const environmentVariable = process.env.REACT_APP_TEST;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "info": []
    }

  
    // this.state = {
    //    name: '',
    //    year: '',
    //    grapes: '',
    //    country: '',
    //    region: '',
    //    description: '',
    //    picture:'',
    //    price: ''


    // }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post(`http://myapi-profstream.herokuapp.com/api/258ce2/wines`, this.state)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error)
    })
  }
  
async postApi () {
  try{
    const response = await axios.post(`http://myapi-profstream.herokuapp.com/api/258ce2/wines",this.state`);
    console.log("bbbb", response.data)
  } catch (e) {
    console.error(e);
    }
}
  async callApi() {
    try {
      const response = await axios.get("http://myapi-profstream.herokuapp.com/api/258ce2/wines");
      console.log("aaaa", response.data);
      this.setState({"info": response.data})
    } catch(e) {
      console.error(e);
    }
  }

  // async postWine() {
  //   const wine = {
  //     name: "pinot grigio",
  //     year: "1980"
  //   };
  //   try{
  //   const request = await axios.post("http://myapi-profstream.herokuapp.com/api/258ce2/wines", {name: 'pinot grigio'});
  //   console.log("bbbb", request.data);
  // } catch(e) {
  //   console.error(e);
  // }
  // }

  // async deleteWine (id) {
  //   try {
  //     const erase = await axios.delete(`http://myapi-profstream.herokuapp.com/api/258ce2/wines`+id);
  //     console.log("dddd", erase.data)
  //   } catch(e) {
  //     console.error(e);
  //   }
  // }

  // deleteHandler = (e, id) => {
  //   e.preventDefault()
  //   console.log(this.state);
  //   axios.delete("http://myapi-profstream.herokuapp.com/api/258ce2/wines/${id}", )
  //   .then(response => {
  //       console.log(response)
  //   })
  //   .catch(error => {
  //       console.log(error)
  //   })

  // }

//   handleDelete = (itemId) => {
//     axios.delete("http://myapi-profstream.herokuapp.com/api/258ce2/wines", {params: {id: itemId}})
//     .then(response => {
//         console.log(response);
//     })
// }

// handleDelete = () => {
//   axios.delete("http://myapi-profstream.herokuapp.com/api/258ce2/wines/", {
//       params: { id: this.state.info.id }
//     })
//     .then(response => {
//       console.log(response);
//     });
// };

  componentDidMount() {
    this.postApi();
    this.callApi();
  }


  render() {


   function handleDelete(e, id){
      e.preventDefault()
      console.log(this.state);
      axios.delete(`http://myapi-profstream.herokuapp.com/api/258ce2/wines/${id}` )
      .then(response => {
          console.log(response)
      })
      .catch(error => {
          console.log(error)
      })
  
    }

    return(
      <Router>
      <div>
        
        <nav>
          {this.state.info.map(function(info, index){
            return (
            <li>
              <Link id={index} to={{pathname: `/Wines/${Object.values(info)[1]}`,}}>{Object.values(info)[1]}</Link>
            </li>

            )
          })}
        </nav>
        
        
        
           
        <ul>
          {this.state.info.map(function(info, index){
            return (
            <div>
                   <p>{Object.values(info)[1]}</p>
                   <img src={info.picture}></img>
                   <p>{info.year}</p>
                   <p>{info.grapes}</p>
                   <p>{info.country}</p>
                   <p>{info.region}</p>
                   <p>{info.description}</p>
                   <p>{info.price}</p>
                   <p>Item ID= {info.id}</p>
            </div>
            )
          })}
        </ul>

        <PostForm></PostForm>
        <DeleteForm></DeleteForm>
      </div>
      </Router>
    )
  }

  
}

export default App;

//I need to study the anatomy of a URL in order to find ways to dynamically update the link and display the wine that I am looking at.