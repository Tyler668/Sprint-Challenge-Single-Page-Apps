import React from "react";
import styled from 'styled-components';

const WrapperDiv = styled.div`
display: flex;
justify-content: center;
`;


export default function ServerError(props){
    return(
        <div>
            <img src = "C:\Users\tyler\Documents\github\Sprint-Challenge-Single-Page-Apps\src\img\rick.jpg"></img>
            <h2>The server's burrr-broken Morty, what the hell did you do!?</h2>
        </div>
        
    );
}