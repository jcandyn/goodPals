import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';
import AddFriend from './AddFriend';


class Home extends Component {

  constructor(props){
    super(props);
    this.state = {value: ''};
  }

   // Retrieves the list of items from the Express app
   getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
 const { list } = this.state;
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <AddFriend/>
      {/* <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link> */}
    </div>
    );
  }
}
export default Home;