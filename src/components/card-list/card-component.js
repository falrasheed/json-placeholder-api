import React from 'react';
import Button from "../button";
import './card-component-styles.css';

export const Render = (props) => (
  <div className = "card-list-container">
    <ul className="ul">
            <li className="avatar">{props.user.name[0]}</li>
            <li className="name" >{props.user.name}</li>
            <li className="username">@{props.user.username}</li>
            <li className="website">http://{props.user.website}</li>
            <Button/>
          </ul>
  </div>
)



