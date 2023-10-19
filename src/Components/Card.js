import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

const Card = (props) => {
  return (
    <div className="card-container ">
      
      <div className="title">
        <h1 className="card-id">{props.id}</h1>
        <div className="user-icon"><FaUserAlt /></div>
      </div>

      <div className="description">{props.title.length>68?props.title.slice(0,68)+"....":props.title}</div>

      <div className="details">
        <h1 className="dot"><GoDotFill /></h1>
        <p className="feature-request">{props.tag}</p>
      </div>
    </div>
  );
}

export default Card;
