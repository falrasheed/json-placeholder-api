import React from 'react';
import {Link} from 'react-router-dom';

function Button(){
  const redirectButton = () => {
    console.log("hello");
  };

  return(
    <div>
      <Link to="/detailspage" className="button" onClick = {redirectButton}> MORE DETAILS</Link>
    </div>
  );
}

export default Button;
