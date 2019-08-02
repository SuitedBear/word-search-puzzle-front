import React from 'react'

function Board(props) {
  const lines = props.grid.map((line, index) => {
    return <BoardLine key={index} line={line} clickHandler={props.clickHandler} />
  });

  return (
    // temporary styling
    <ul style={{ listStyle: 'none' }}>
      {lines}
    </ul>
  )
}

function BoardLine(props) {
  const cellLine = props.line.map((cell, index) => {
    return (
      <button key={index} onClick={props.clickHandler} value={cell}>{cell}</button>
    );
  })

  return (
    <li>
      {cellLine}
    </li>
  )
}


export default Board;
