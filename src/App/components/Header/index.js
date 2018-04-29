import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledMenu = styled.nav`
    display: inline-block;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 0.5rem;
    color: #333;
    &:hover, &:focus, &:active {
        color: steelblue;
    }
`;

const Header = () => (
    <StyledHeader>
        <h1>3 en Raya</h1>
        <StyledMenu>
            <StyledLink to="/">Game</StyledLink>
            <StyledLink to="/result">Results</StyledLink>            
        </StyledMenu>        
    </StyledHeader>
);

export default Header;