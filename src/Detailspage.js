import React from 'react';
import {useState, useEffect} from 'react';

function Details () {
    useEffect(()=> {
    fetchDetails();
  },[]);

  const [items, setItems] = useState([]);

  const api_url = 'https://jsonplaceholder.typicode.com/users/'

  const fetchDetails = async () => {
    await fetch(api_url)
    .then(items => items.json())
    .then(retrievedDetails => setItems(retrievedDetails));
  }

  return (
     <div key={items.list}>
       {items.map(item => (
         <>
         <p>-name:{' ' + item.name}</p>
         <p>-username:{' ' + item.username}</p>
         <p>-email:{' ' + item.email}</p>
         <p>-phone:{' ' + item.phone}</p>
         </>
       ))}
     </div>
   )
}
export default Details;
