import React from 'react';
import './card-list-styles.css';
import {Render} from './card-component.js';



export const CardList = props => {
return <div className='card-list'>
  {props.info.map(user =>{
    console.log(user.id); 


        return (
          <Render key={user.id} user={user}/>
        )
      })}
</div>
}

export default CardList;
