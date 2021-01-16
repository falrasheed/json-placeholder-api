import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './card-list/card-component-styles.css';

export const Button =() => {
  useEffect(()=> {
    fetchButtonId();
  },[]);

  const [ids, setItems] = useState([]);

  const api_url = 'https://jsonplaceholder.typicode.com/users'

  const fetchButtonId = async () => {
    await fetch(api_url)
    .then(ids => ids.json())
    .then(retrievedIds => setItems(retrievedIds));
  }




  return(
    <div key={ids.method}>
       {ids.map(ids => (
         <button key={ids.id}>
           <Link to={`/detailspage/${ids.id}`}>{ids.id}</Link>
         </button>
       ))}
     </div>
  );
}

export default Button;
