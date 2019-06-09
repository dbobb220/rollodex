import React from 'react';

function UserCard(props) {
    return(
    <div className = "person">
        <img src={props.user.picture.large} alt={`${props.user.name.first} ${props.user.name.last}`} />
        <div>{props.user.name.first} {props.user.name.last}</div>
        <button>More Info</button>
        <h3>{props.email}</h3>
    </div>
    )
  }

  export default UserCard
