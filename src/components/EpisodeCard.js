import React from "react";

export default function EpisodeCard(props) {
  return( 
  <div className = "charCard">
  <h2>{props.info.episode}</h2>
  <h3>{props.info.name}</h3>
  <h4>{props.info.characters.length} Characters</h4>
</div>
);
}
