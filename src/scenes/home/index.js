import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
    border-spacing: 0px;
    border-collapse: separate;
    margin-top: 30px;
    margin-bottom: 30px;
    margin: 30px auto;
`;

const StyledRow = styled.tr`
    &:first-child td {
        border-top: none;
    }
    &:last-child td {
        border-bottom: none;
    }
`;

const StyledColumn = styled.td`
    border: 2px solid #000;
    height: 100px;
    width: 100px;
    text-align: center;
    font: 200 60px helvetica neue, arial;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:first-child {
        border-left: none;
    }
    &:last-child {
        border-right: none;
    }
`;

const Home = () => (
    <div id="placeholder">

	<StyledTable>
		<StyledRow>
			<StyledColumn></StyledColumn>
			<StyledColumn></StyledColumn>
			<StyledColumn></StyledColumn>
		</StyledRow>
		<StyledRow>
			<StyledColumn></StyledColumn>
			<StyledColumn></StyledColumn>
			<StyledColumn></StyledColumn>
		</StyledRow>
		<StyledRow>
			<StyledColumn></StyledColumn>
			<StyledColumn></StyledColumn>
			<StyledColumn></StyledColumn>
		</StyledRow>
	</StyledTable>
</div>
);

export default Home;