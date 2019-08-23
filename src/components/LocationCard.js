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

export default function LocationCard(props) {
  return <WrapperDiv className = "charCard">
  <h2>{props.info.name}</h2>
  <h4>{props.info.type}-{props.info.dimension}</h4>
  <h4>{props.info.residents.length} Residents</h4>
</WrapperDiv>;
}
