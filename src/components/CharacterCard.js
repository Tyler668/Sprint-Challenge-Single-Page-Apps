import React from "react";


export default function CharacterCard(props) {
 
 
  return (
  <div className = "charCard">
    <img src = {props.info.image}></img>
    <h2>{props.info.name}</h2>
    <h3>{props.info.location.name}</h3>
  </div>
  );
}
