import React, { Component } from 'react';
import './App.css';

function UserCard(props) {

  return <div>
    <img src={props.user.picture.large} alt={`${props.user.name.first} ${props.user.name.last}`} />
    <div>{props.user.name.first} {props.user.name.last}</div>
    <div>
    {
      //TODO needs to include more info card
      //TODO needs to toggle button text and hide info care
      //TODO needs to be specific to user and not global change
      props.hide === false ? <div></div> : null
    }</div>
    <button onClick={props.showDetail}>Show Details</button>
    </div>
}

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
        <header className="App-header">
          {
            this.state.results.map((user, index) => <UserCard 
              key={index} 
              user={user} 
              showDetail={this.showDetail}
              hide={this.state.isHidden}
              />           
            )
          }
        </header>
      </div>
    );
  }
}

export default App;
