import React from 'react';
import styled from "../../node_modules/@emotion/styled";

const Header = ( { titulo } ) => {
    const ContenedorHeader = styled.header`
        background-color: #26C6DA;
        padding: 10px;
        font-weight: bold;
        color: #FFF;
    `;

    const TextoHeader = styled.h1`
        font-size: 2rem;
        margin: 0;
        font-family: "Slabo 27px", serif;
        text-align: center;
    `;

    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}
 
export default Header;