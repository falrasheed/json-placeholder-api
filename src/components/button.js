import React from 'react';

function Button(){
  const redirectButton = () => {
    console.log("hello");
  };

  return(
    <div>
      <button className="button" onClick = {redirectButton}> MORE DETAILS</button>
    </div>
  );
}

export default Button;
