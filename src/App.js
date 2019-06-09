import React, { Component } from 'react';
import './App.css';
import UserCard from './UserCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isHidden: false
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=25") 
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data.results
        })
      })
      .catch(err => console.log("Error: " + err))
  }


  showDetail = () => {
    this.setState({
      isHidden: false
    })
  }

  render() { 
    return (
      <div className="App">
          {
            this.state.results.map((user, index) => <UserCard 
              key={index} 
              user={user} 
              showDetail={this.showDetail}
              hide={this.state.isHidden}
              />           
            )
          }
      </div>
    );
  }
}

export default App;
