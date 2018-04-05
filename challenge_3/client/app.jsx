// import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class App extends React.Component {
  // initialize()
  render() { return <Board /> }
}

const Board = props => {
  const boardModel = [5, 4, 3, 2, 1, 0];
  return (
    <table align="center">
      <tbody>
        { boardModel.map(row => (<Row row={row} key={`row${row}`} />)) }
      </tbody>
    </table>
  )
}

const Row = props => {
  const rowModel = [0, 1, 2, 3, 4, 5, 6];
  return (
    <tr>
      { rowModel.map(col => (<td key={col} className="space"></td>)) }
      {/* erased props reference */}
    </tr>
  )
}

// Row.propTypes = {
//   row: PropTypes.number
// }

/* const Piece = props => {}

const UI = props => {} */

// const ConnectFour = new App();

ReactDOM.render(
  <App />,
  document.getElementById('app')
)