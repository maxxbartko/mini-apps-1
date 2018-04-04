// import React from 'react';
// import ReactDOM from 'react-dom';


class App extends React.Component {
//   initialize()
  render() { return <Board/> }

}

const Board = props => {
  const boardModel = [5, 4, 3, 2, 1, 0];
  return (
    <table>
      { boardModel.map(row => (<tr row={row} key={`row${row}`}></tr>)) }
    </table>
  )
}

const Row = props => {
  const rowModel = [0, 1, 2, 3, 4, 5, 6];
  return (
    rowModel.map(col => (<td key={`${this.props.row},${col}`} class="space"></td>))
  )
}

Row.propTypes = {
  row: React.PropTypes.number.isRequired
}

{/* const Piece = props => {

}

const UI = props => {

} */}

const ConnectFour = new App();

ReactDOM.render(
  <ConnectFour/>,
  document.getElementById('app')
)