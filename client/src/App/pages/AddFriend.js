import React, { Component } from 'react';

class AddFriend extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  // Fetch the list on first mount
  componentDidMount() {
    // this.getList();
  }

  addFriend = () => {
      alert('hi')
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }


  render() {
    return (
      <div className="AddFriend d-flex justify-content-center">
        <div className="row">
        <div className="input-group col-md-12">
  <form onSubmit={this.handleSubmit}>
  <label>
    <input placeholder="friend's name" type="text" name="name" value={this.state.value} onChange={this.handleChange} className="form-control"/>
  </label>
  <input className="btn btn-dark" type="submit" value="Submit" />
</form>
  </div> 
</div>
      </div>
    );
  }
}

export default AddFriend;