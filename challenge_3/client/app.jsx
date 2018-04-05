// import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boardModel: [
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null]
      ],
      isRedsTurn: true
    }
  }

  takeTurn(e) {
    // let [x, y] = e.currentTarget.split(','),
    console.log(e.currentTarget),
    e.currentTarget.className = this.state.isRedsTurn ? 'red' : 'black',
    // this.setState(boardModel[e.currentTarget.id] = this.state.isRedsTurn ? true : false)
    this.setState({ isRedsTurn: !this.state.isRedsTurn })
  }

  changeColor(e) {
    
  }

  render() { 
    return (<Board takeTurn={this.takeTurn.bind(this)}/>) }
}

const Board = props => {
  return (
    < table align = "center">
      <tbody>
        { [5, 4, 3, 2, 1, 0].map(row => (<Row row={row} key={`row${row}`} takeTurn={props.takeTurn} />)) }
      </tbody>
    </table>
  )
}

const Row = props => {
  return (
    <tr>
      { [0, 1, 2, 3, 4, 5, 6].map(col => (<td id={`${props.row},${col}`} key={`${props.row},${col}`} className="space" onClick={props.takeTurn}></td>)) }
    </tr>
  )
}

// Row.propTypes = {
//   row: PropTypes.number
// }

const Piece = props => {
  return (
    <div>
      {}
    </div>
  )
}

// const UI = props => {}

// const ConnectFour = new App();

ReactDOM.render(
  <App />,
  document.getElementById('app')
)