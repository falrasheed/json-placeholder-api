import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Details () {
  const [items, setItems] = useState([]);
    useEffect(()=> {
    fetchDetails();
  },[]);

  const {id} = useParams ();
//let {id} = useParams ();

  const api_url = `https://jsonplaceholder.typicode.com/users/${id}`

  const fetchDetails = async () => {
    await fetch(api_url)
    .then(items => items.json())
    .then(retrievedDetails => setItems(retrievedDetails));
    setItems(items);
}
console.log(items);



  return (
    <div className="detail-list">
      {items.map((user) => (
        <p key="user.name">{user.name}</p>
      ))}
    </div>
     /*<div key={items.list}>
       {items.map(item => (
         <>
         <p>-name:{' ' + item.name}</p>
         <p>-username:{' ' + item.username}</p>
         <p>-email:{' ' + item.email}</p>
         <p>-phone:{' ' + item.phone}</p>
         </>
       ))}
     </div>*/
   )
}
export default Details;
