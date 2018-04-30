import React from 'react';
import styled from 'styled-components';


const StyledMsg = styled.div`
    display: block;
    margin: 2rem auto;
    width: 600px;
    padding: 2rem;
    text-align: center;
    border: 2px solid #aaa;
    border-radius: 4px;
    background: #fcfcfc;
`;

const Ia = () => (
    <StyledMsg>Mi programador como que es un poco lento y aún no me ha desarrollado ni un ápice de inteligencia, quizás mañana...</StyledMsg>
);

export default Ia;