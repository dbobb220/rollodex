import React from 'react';

function UserCard(props) {
    return(
    <div className = "person">
        <img src={props.user.picture.large} alt={`${props.user.name.first} ${props.user.name.last}`} />
        <div>{props.user.name.first} {props.user.name.last}</div>
        {
            props.hide === true ? 
                <div>
                    <button onClick={props.showDetail}>More Info</button>
                </div> : 
                <div>
                    <button onClick={props.hideDetail}>Less Info</button>
                    <p>{props.user.email}</p>
                    <p>{props.user.cell}</p>
                </div>
        }
    </div>
    )
  }

  export default UserCard
