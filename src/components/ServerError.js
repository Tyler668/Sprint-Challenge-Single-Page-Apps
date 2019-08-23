import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const WrapperDiv = styled.div`
display: flex;
justify-content: center;
align-content: center;
flex-flow: column ;
`;

const Img = styled.img`
margin: auto;
background: transparent;
height: 700px;
width: 700px;
`;

export default function ServerError(props) {
    return (
        <WrapperDiv className="errorWrap">
            <h2>Server Error</h2>
            <Img src="https://miro.medium.com/max/1200/1*d5g31wvUpmILqzge216Fug.png"></Img>
            <h3>Wh-where are we rick?</h3>
            <Link to={'/'}>
                <button>I-I wanna go home..</button>
            </Link>
        </WrapperDiv>

    );
}