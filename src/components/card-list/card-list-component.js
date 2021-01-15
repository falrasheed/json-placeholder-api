import React from 'react';
import './card-list-styles.css';
import {Render} from './card-component.js';
import Button from "../button";

export const CardList = props => {
return <div className='card-list'>
  {props.info.map(user =>{
        return (
          /*<ul className="ul" key={user.id} info={info}>
            <li className="avatar">{user.name[0]}</li>
            <li className="name" >{user.name}</li>
            <li className="username">@{user.username}</li>
            <li className="website">{user.website}</li>
            <Button/>
          </ul>*/
          <Render key={user.id} user={user}/>
        )
      })}
</div>
}

export default CardList;
