import React from 'react'

export default class DoneFrame extends React.Component {
    render (){
      return (
        <div className="well text-center">
          <h2>{ this.props.doneStatus }</h2>
          <button className="btn btn-default" onClick={(e) => {this.props.resetGame(e)}}>
            Play again !
          </button>
        </div>
      )
    }
}
