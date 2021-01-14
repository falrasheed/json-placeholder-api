import React from 'react';
import Button from "./button";
import './App.css';

function Card({initial, name, username, website}) {
  /*const redirectButton = () => {
    console.log("hello");
  };*/

  return (
    <div className="card">
      <ul>
        <li>{initial}</li>
        <li>{name}</li>
        <li>{username}</li>
        <li>{website}</li>
      </ul>
      <Button/>
    </div>
  );
}

export default Card;
