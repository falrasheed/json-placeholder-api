import React, {useState, useEffect} from 'react';
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
      <CardList info = {info}>
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
