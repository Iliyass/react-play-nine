import React from "react"

export default class StarsFrame extends React.Component{
  constructor(props){
    super(props)
  }
  render (){
    let numbersOfStars = this.props.numberOfStars
    let stars = []
    for(let i = 0; i< numbersOfStars; i++){
      stars.push(<span key={i} className="glyphicon glyphicon-star"></span>)
    }
    return (
      <div id="stars-frame">
          <div className="well">
            {stars}
          </div>
      </div>
    )
  }
}
