import React from 'react';
import './card-list-styles.css';
import {Render} from './card-component.js';
import Button from "../button";

export const CardList = props => {
return <div className='card-list'>
  {props.info.map(user =>{
        return (
          <Render key={user.id} user={user}/>
        )
      })}
</div>
}

export default CardList;
