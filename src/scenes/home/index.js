import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  border-spacing: 0px;
  border-collapse: separate;
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
  font: 60px helvetica neue, arial;
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
  &.X {
    color: steelblue;
  }
  &.O {
    color: red;
  }
`;

const StyledScore = styled.td`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 50px;
  &.X {
      color: steelblue;
  }
  &.O {
      color: red;
  }
`;

class Home extends Component {
  state = {
    grid_size: 3, // you can change the grid_size
  };


  init() {
    // Saves numbers of moves made
    this.moves = 0;

    this.setState({
      // Saves & Prints the scores of player 1 & 2
      score: {
        X: 0,
        O: 0,
      },
      // Contains data of current game..which column is marked by which player
      data: {},
    });
  }


  empty() {
    // Zero the moves count
    this.moves = 0;
    // Empty the data
    this.setState({ data: {} });
  }


  mark(row_index, col_index) {
    // Return If already marked
    if (this.state.data[row_index + '' + col_index]) {
      return;
    }

    // Increment the number of moves
    this.moves++;

    // Get the current mark "X" or "O" based on the moves count
    var current_mark = this.moves % 2 === 1 ? 'X' : 'O';

    // Assign mark data to the data object
    this.setState({
      data: {
        ...this.state.data,
        [row_index + '' + col_index]: current_mark,
      },
    });

    // Let react update the dom
    setTimeout(() => {
      // Check if the user has won
      if (this.didWin(current_mark)) {
        alert(current_mark + ' has won');
        this.setState({
          score: {
            ...this.state.score,
            [current_mark]: this.state.score[current_mark] + 1,
          },
        });
        this.empty();
      }
      // Check if it's a draw
      else if (this.moves === Math.pow(this.state.grid_size, 2)) {
        alert("It's a draw !");
        this.empty();
      }
    }, 300);
  }

  
  // Check if the player with the current mark has won
  didWin(mark) {
    // Declare variables to count the presence of the mark
    var vertical_count = 0,
      horizontal_count = 0,
      right_to_left_count = 0,
      left_to_right_count = 0;

    // Loop 1
    for (var i = 0; i < this.state.grid_size; i++) {
      // Empty the count
      vertical_count = 0;
      horizontal_count = 0;

      // Loop 2
      for (var j = 0; j < this.state.grid_size; j++) {
        // (00, 01, 02)  (10, 11, 12)  (20, 21, 22)
        if (this.state.data[i + '' + j] === mark) {
          horizontal_count++;
        }

        // (00, 10, 20)  (01, 11, 21)  (02, 12, 22)
        if (this.state.data[j + '' + i] === mark) {
          vertical_count++;
        }
      }

      // (00, 11, 22)
      if (this.state.data[i + '' + i] === mark) {
        left_to_right_count++;
      }

      // (this.state.grid_size - 1 - i) + '' + i ==> (02, 11, 20)
      if (this.state.data[this.state.grid_size - 1 - i + '' + i] === mark) {
        right_to_left_count++;
      }

      // If vertical/horizontal count matches the grid size in this loop then user has won
      if (
        horizontal_count === this.state.grid_size ||
        vertical_count === this.state.grid_size
      ) {
        return true;
      }
    }

    // If diagonal count matches the grid size then user has won
    if (
      left_to_right_count === this.state.grid_size ||
      right_to_left_count === this.state.grid_size
    ) {
      return true;
    }

    // Nobody won
    return false;
  }

  componentWillMount() {
    this.init();
  }

  render() {
    let counter = 0;
    let counter2 = 0;
    let dummy_array = Array.apply(null, Array(this.state.grid_size));

    return (
      <div>
        <StyledTable>
          <tbody>
            <tr>
              <td> Player 1 </td>
              <td width="30"> &nbsp; </td>
              <td> Player 2 </td>
            </tr>
            <tr>
              <StyledScore className="X">{this.state.score.X}</StyledScore>
              <td> &nbsp; </td>
              <StyledScore className="O">{this.state.score.O}</StyledScore>
            </tr>
          </tbody>
        </StyledTable>

        <div>
          <StyledTable>
            <tbody>
              {dummy_array.map((value, row_index) => {
                counter += 1;
                return (
                  <StyledRow key={counter}>
                    {dummy_array.map((value, column_index) => {
                      counter2 += 1;
                      return (
                        <StyledColumn
                          key={counter2}
                          className={
                            this.state.data[row_index + '' + column_index]
                          }
                          onClick={() => {
                            this.mark(row_index, column_index);
                          }}
                        >
                          {this.state.data[row_index + '' + column_index]}
                        </StyledColumn>
                      );
                    })}
                  </StyledRow>
                );
              })}
            </tbody>
          </StyledTable>
        </div>
      </div>
    );
  }
}

export default Home;
