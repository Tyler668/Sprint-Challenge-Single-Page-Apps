import React from "react";

export default function LocationCard(props) {
  return <div className = "charCard">
  <h2>{props.info.name}</h2>
  <h3>Dimension: {props.info.dimension}</h3>
  <h4>Classification: {props.info.type}</h4>
  <h4>Residents: {}</h4>
</div>;
}
