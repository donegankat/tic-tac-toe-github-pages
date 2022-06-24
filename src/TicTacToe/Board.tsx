import * as React from 'react';
import Square from './Square';

interface IBoardProps {
  squares: string[];
  highlightedSquares?: number[];
  onClick: (e: number) => void;
}

/**
 * Creates the board which contains the 9 Squares.
 * Example usage: <Board />
 */
export default class Board extends React.Component<IBoardProps> {
  renderSquare(i: number) {
    return (
      <Square
        key={'square-index-' + i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        isHighlighted={this.props.highlightedSquares !== undefined && this.props.highlightedSquares.indexOf(i) > -1}
      />
    );
  }

  render() {
    const squareRows = [];

    // Build the 9 squares in 3 rows dynamically.
    for (let i = 0; i < 3; i++) {
      const squares = [];

      for (let j = 0; j < 3; j++) {
        const squareIndex = i * 3 + j;
        squares.push(this.renderSquare(squareIndex));
      }

      squareRows.push(
        <div key={'board-row-' + i} className="board-row">
          {squares}
        </div>
      );
    }

    return <div>{squareRows}</div>;
  }
}
