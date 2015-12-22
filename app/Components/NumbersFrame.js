import React from "react"

export default class NumbersFrame extends React.Component{
  constructor(props){
    super(props)
  }
  render (){
    let numbers = [], className, selectedNumbers = this.props.selectedNumbers,
                  usedNumbers = this.props.usedNumbers
    for(let i = 1; i<= 9; i++){
      className = 'number selected-' + (selectedNumbers.indexOf(i) >= 0)
      className += ' used-' + (usedNumbers.indexOf(i) >= 0)
      numbers.push(<div key={i} className={className} onClick={(e) => this.props.selectNumber(i) }>{i}</div>)
    }
    return (
      <div id="numbers-frame">
        <div className="well">
          {numbers}
        </div>
      </div>
    )
  }
}
