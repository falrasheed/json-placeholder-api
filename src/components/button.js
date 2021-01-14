import React from 'react';

function Button(){
  const redirectButton = () => {
    console.log("hello");
  };

  return(
    <div>
      <button onClick = {redirectButton}> More Details</button>
    </div>
  );
}

export default Button;
