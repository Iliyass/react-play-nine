import React from "react"
import DoneFrame from "./Components/DoneFrame"
import StarsFrame from "./Components/StarsFrame"
import ButtonFrame from "./Components/ButtonFrame"
import AnswerFrame from "./Components/AnswerFrame"
import NumbersFrame from "./Components/NumbersFrame"
import possibleCombinationSum from "./utils"


export default class Game extends React.Component{
  constructor(props){
    super(props)
    this.state = {
                  numberOfStars: this.getRandomNumber(),
                  selectedNumbers : [],
                  usedNumbers: [],
                  correct: null,
                  redraws: 5,
                  doneStatus: 'sdsd'
                }

  }
  getRandomNumber (){
    return Math.floor(Math.random() * 9) + 1
  }
  selectNumber = (clickedNumber) => {
    if(this.state.selectedNumbers.indexOf(clickedNumber) < 0){
      this.setState({
        selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
        correct: null
      })}
  }
  unselectNumber = (clickedNumber) => {
    let selectedNumbers = this.state.selectedNumbers;
     let indexOfNumber = selectedNumbers.indexOf(clickedNumber)
    selectedNumbers.splice(indexOfNumber, 1)
    this.setState({ selectedNumbers, correct: null})
  }
  sumOfSelectedNumbers () {
    let value = this.state.selectedNumbers.reduce((previous, current) => {
      return previous + current
    } , 0)
    return value
  }
  checkAnswer = (e) => {
      let correct = (this.state.numberOfStars === this.sumOfSelectedNumbers());

      this.setState({correct});
  }
  acceptAnswer = (e) => {
    let usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers)
    this.setState({
      usedNumbers,
      selectedNumbers: [],
      numberOfStars: this.getRandomNumber()
    }, () => {
      this.updateDoneStatus()
    })
  }
  redraw = (e) =>{
    if(this.state.redraws > 0){
      this.setState({
        numberOfStars: this.getRandomNumber(),
        selectedNumbers: [],
        correct: null,
        redraws: this.state.redraws - 1
      }, () => {
        this.updateDoneStatus()
      })
    }
  }
  possibleSolutions (){
    let numberOfStars = this.state.numberOfStars,
        possibleNumbers = [],
        usedNumbers = this.state.usedNumbers

    for (var i = 1; i <= 9; i++) {
        if(usedNumbers.indexOf(i) < 0){
          possibleNumbers.push(i)
        }
    }

    return possibleCombinationSum(possibleNumbers, numberOfStars)

  }
  updateDoneStatus (){
    if(this.state.usedNumbers.lenght === 9){
      this.setState({doneStatus: 'Done Nice!'})
      return;
    }
    if(this.state.redraws === 0 && ! this.possibleSolutions() ){
      this.setState({ doneStatus: 'Gem Over !'})
    }
  }
  resetGame = (e) => {
    this.setState({
                  numberOfStars: this.getRandomNumber(),
                  selectedNumbers : [],
                  usedNumbers: [],
                  correct: null,
                  redraws: 5,
                  doneStatus: null
                })
  }
  render (){
    let bottomFrame;
    if(this.state.doneStatus){
      bottomFrame = <DoneFrame doneStatus={this.state.doneStatus} resetGame={this.resetGame} />
    }else{
      bottomFrame = <NumbersFrame  usedNumbers={this.state.usedNumbers}
                               selectedNumbers={this.state.selectedNumbers}
                               selectNumber={this.selectNumber}/>
    }
    return (
      <div id="game" className="col-md-5">
        <h2>Play Nine</h2>
        <hr />
        <div className="clearfix">
          <StarsFrame numberOfStars={this.state.numberOfStars} />
          <ButtonFrame redraws={this.state.redraws}
                      redraw={this.redraw}
                      acceptAnswer={this.acceptAnswer}
                      selectedNumbers={this.state.selectedNumbers}
                      correct={this.state.correct}
                      checkAnswer={this.checkAnswer} />
          <AnswerFrame unselectNumber={this.unselectNumber} selectedNumbers={this.state.selectedNumbers}/>
        </div>
        {bottomFrame}

      </div>
    )
  }
}
