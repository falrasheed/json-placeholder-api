import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Details () {
  const [data, setItems] = useState([]);
    useEffect(()=> {
    fetchDetails();
  },);

  const {id} = useParams ();
//let {id} = useParams ();

  const api_url = `https://jsonplaceholder.typicode.com/users/${id}`

  const fetchDetails = async () => {
    await fetch(api_url)
    .then(response => response.json())
    .then(retrievedDetails => setItems(retrievedDetails));
}
console.log(data);

  return (
    <div className="detail-list">
      {data.map((user) => (
        <>
        <p>-name{user.name}</p>
        <p>-username{user.username}</p>
        <p>-email{user.email}</p>
        <p>-phone{user.phone}</p>
        <p>-company{user.company}</p>
        <p>-website{user.website}</p>
        <p>-address{user.address}</p>
        </>
      ))}
    </div>
   )
}
export default Details;
