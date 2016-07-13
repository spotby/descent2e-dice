import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import './DiceSelector.scss';
import {selectDice} from 'actions/Dice/DiceActions';

export default class DiceSelector extends Component {
  constructor(){
    super();

    this.selectDice = this.selectDice.bind(this);
  }

  render(){
    return (
      <div className="dice-selector-container container-fluid">
        <p>Select your Dice</p>
        <div className="dice-selector">
          <div className="dice-selector-row">
            <div className="selectable-dice blue" data-color="blue" data-index="0" onClick={this.selectDice}></div>
            <div className="selectable-dice red" data-color="red" data-index="1" onClick={this.selectDice}></div>
            <div className="selectable-dice yellow" data-color="yellow" data-index="2" onClick={this.selectDice}></div>
            <div className="selectable-dice green" data-color="green" data-index="3" onClick={this.selectDice}></div>
            <div className="clearfix"></div>
          </div>
          <div className="dice-selector-row">
            <div className="selectable-dice gray" data-color="gray" data-index="4" onClick={this.selectDice}></div>
            <div className="selectable-dice black" data-color="black" data-index="5" onClick={this.selectDice}></div>
            <div className="selectable-dice brown" data-color="brown" data-index="6" onClick={this.selectDice}></div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    )
  }

  selectDice(e){
    const index = $(e.target).attr('data-index');

    this.props.dispatch(selectDice(index));
  }
}

DiceSelector.propTypes = {};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(DiceSelector);
