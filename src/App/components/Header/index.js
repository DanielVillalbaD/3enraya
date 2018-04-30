import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const StyledMenu = styled.nav`
    display: inline-block;
    margin-bottom: 2rem; 
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 0rem 0.7rem;
    color: #333;
    &:hover, &:focus, &:active {
        color: steelblue;
    }
`;

const Header = () => (
    <StyledHeader>
        <h1>3 en Raya</h1>
        <StyledMenu>
            <StyledLink to="/">2 Players</StyledLink>
             | 
            <StyledLink to="/ia">1 Player</StyledLink>            
        </StyledMenu>        
    </StyledHeader>
);

export default Header;