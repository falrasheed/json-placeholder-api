import React from 'react';
import Button from "./button";
import './App.css';

function Card({initial, name, username, website}) {
  /*const redirectButton = () => {
    console.log("hello");
  };*/

  return (
    <div className="card">
      <h1>{initial}</h1>
      <h2>{name}</h2>
      <h3>{username}</h3>
      <h4>{website}</h4>
      <Button/>
    </div>
  );
}

export default Card;
