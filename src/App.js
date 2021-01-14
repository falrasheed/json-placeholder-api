import React, {useState, useEffect} from "react";
import Card from "./card";

function App() {

  //stored info
  const [info, setInfo] = useState([]);

  useEffect(()=> {
    getInfo();
    //gets info
  }, []);

  const getInfo = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(retrievedInfo => setInfo(retrievedInfo));
  }





  return (
    <div className="app">
      {info.map(user => (
        <div key={user.id}>
          {user.name}, {user.username} {user.website}</div>
      ))}
    </div>
  );
}

export default App;
