import React from "react";
import styled from 'styled-components';

const WrapperDiv = styled.div`
border: 2px solid whitesmoke;
margin-bottom: 20px;
padding: 10px;
border-radius: 8px;
background: #45997e;
color: whitesmoke;
box-shadow: 5px 10px 8px black;
`;


export default function EpisodeCard(props) {
  return( 
  <WrapperDiv className = "charCard">
  <h2>{props.info.episode}</h2>
  <h3>{props.info.name}</h3>
  <h4>{props.info.characters.length} Characters</h4>
</WrapperDiv>
);
}
