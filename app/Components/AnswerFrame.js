import React from "react"

export default class AnswerFrame extends React.Component{
  render (){
    let selectedNumbers = this.props.selectedNumbers,
        unselectNumber = this.props.unselectNumber
    selectedNumbers = selectedNumbers.map( (number) => {
      return (<span key={number} onClick={(e) => { unselectNumber(number) }}>{number}</span>)
    })
    return (
      <div id="answer-frame">
        <div className="well">
          {selectedNumbers}
        </div>
      </div>
    )
  }
}
