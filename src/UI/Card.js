import React from "react";
import './Card.css';

function Card (props) {
  return (
    <div className="card" key={props.id}>
      <button onClick={props.removeCard} className="removeButton">x</button>
      <div className="animalIMG"><img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name} /></div>
      <div className="cardsButtom">
        <div className="animalName">{props.name}</div>
        <div className="likeBox">
          <div className="minusLike"><button onClick={props.removeLikes} className="minus">-</button></div>
          {props.likes >= 0 ? <div className="heart">❤️{props.likes}</div> : <div className="heart">💔{props.likes}</div>}
          <div className="plusLike"><button onClick={props.addLikes} className="plus">+</button></div>
        </div>
      </div>
    </div >
  );
};

export default Card;
