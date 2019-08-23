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

const Img = styled.img`
border: 3px solid whitesmoke;
border-radius 10px;
`;

export default function CharacterCard(props) {
 
 
  return (
  <WrapperDiv>
    <Img src = {props.info.image}></Img>
    <h2>{props.info.name}</h2>
    <h3>{props.info.location.name}</h3>
  </WrapperDiv>
  );
}
