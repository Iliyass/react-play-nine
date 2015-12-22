import React from "react"


export default class ButtonFrame extends React.Component{
  render (){
    let correct = this.props.correct,
        checkAnswer = this.props.checkAnswer,
        acceptAnswer = this.props.acceptAnswer,
        redraw = this.props.redraw,
        redraws = this.props.redraws

    let disabled;
    switch (correct) {
      case true:
          button = (
                    <button className="btn btn-success btn-lg" onClick={(e) => {acceptAnswer(e)}}>
                      <span className="glyphicon glyphicon-ok"></span>
                    </button>
                )
        break;
      case false:
      button = (
                <button className="btn btn-danger btn-lg">
                  <span className="glyphicon glyphicon-remove"></span>
                </button>
            )
        break;
        default:
          disabled = (this.props.selectedNumbers.length === 0)
          let button = (
                    <button className="btn btn-primary btn-lg" disabled={disabled} onClick={(e) => { checkAnswer(e)} }>=</button>
                )
          break;
    }
    return (
      <div id="button-frame">
        {button}
        <br/><br/>
        <button disabled={redraws === 0} onClick={(e) => {this.props.redraw(e)}} className="btn btn-warning btn-xs"> <span className="glyphicon glyphicon-refresh"></span>
          &nbsp;
          {redraws}
        </button>
      </div>

    )
  }
}
