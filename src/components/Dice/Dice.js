import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import './Dice.scss';

import {removeDice} from 'actions/Dice/DiceActions';

export default class Dice extends Component {
  constructor(){
    super();

    this.handleRemove = this.handleRemove.bind(this);
    this.handleReroll = this.handleReroll.bind(this);

  }
  componentDidMount(){

  }

  render(){
    let face;
    let faceIndex = this.props.diceData.faceIndex;
    if(faceIndex){
      face = this.displayFace(this.faces[faceIndex]);
    }

    return (
      <div className="dice-container" data-index={this.props.index}>
        <div className={"dice "+this.props.diceData.color+"-dice"}>{face}</div>

        <div className="remove-dice" onClick={this.handleRemove}>
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-remove fa-stack-1x"></i>
          </span>
        </div>
        <div className="reroll-dice" onClick={this.handleReroll}><i className="fa fa-refresh"></i></div>
      </div>
    )
  }

  handleRemove(e){
    const index = $(e.target).parents('.dice-container').attr('data-index');
    this.props.dispatch(removeDice(index));
  }

  handleReroll(e){

  }

  displayFace(arr){
    console.log(arr);
    const output = [];

    return output;
  }
}

Dice.propTypes = {
  index: PropTypes.number
};