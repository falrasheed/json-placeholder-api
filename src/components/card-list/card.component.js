import React from 'react';
import Button from "../button";

export const Render = (props) => (
  <div>
    <ul className="ul">
            <li className="avatar">{props.user.name[0]}</li>
            <li className="name" >{props.user.name}</li>
            <li className="username">@{props.user.username}</li>
            <li className="website">{props.user.website}</li>
            <Button/>
          </ul>
  </div>
)



