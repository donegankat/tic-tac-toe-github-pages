import * as React from 'react';

interface ISquareProps {
  isHighlighted: boolean;
  value: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}

/**
 * Creates an HTML element representing a single square on the game board.
 * Example usage: <Square value="1" />
 * @param {*} props
 */
export default function Square(props: ISquareProps) {
  var className = 'square';

  if (props.isHighlighted) {
    className += ' square-highlighted';
  }

  if (props.value === 'X') {
    className += ' square-x';
  } else {
    className += ' square-o';
  }

  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
