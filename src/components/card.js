import React, {useState, useEffect} from 'react';
import Button from "./button";
import '../App.css';
import {CardList} from "./card-list/cardlist.component";

function Card () {

  //stored info
  const [info, setInfo] = useState([]);

  useEffect(()=> {
    getInfo();
  }, []);

  const api_url = 'https://jsonplaceholder.typicode.com/users/'
  const getInfo = async () => {
    await fetch(api_url)
    .then(response => response.json())
    .then(retrievedInfo => setInfo(retrievedInfo));
  }


  return (
    <div>
      <CardList name="Fahad">
      {info.map(user =>{
        return (
          <ul className="ul" key = {user.id}>
            <li className="avatar">{user.name[0]}</li>
            <li className="name" >{user.name}</li>
            <li className="username">@{user.username}</li>
            <li className="website">{user.website}</li>
            <Button/>
          </ul>
        )
      })}
      </CardList>

    </div>
    /*<div className="card">
      {info.map(user => (
        <div key={user.id}>
          {user.name}, {user.username} {user.website}</div>
      ))}*/
      /*<div>
      <ul>
        {info.map(user => <li key={user.id}>{user.name[0]}, {user.name}, {user.username},{user.website}</li>
        )}
      </ul>
      <Button/>
    </div>*/
    /*<div className="card">
      {info.map(user =>{
        return (
          <div key = {user.id}>
          <li>{user.name}</li>
          <li>{user.username}</li>
          <li>{user.website}</li>
          </div>
        )
      })}

    </div>*/
  );
}

export default Card;
