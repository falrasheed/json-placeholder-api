import React, {useState, useEffect} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list-component";

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
  );
}

export default Card;
