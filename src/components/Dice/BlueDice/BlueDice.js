import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Dice from 'components/Dice/Dice';

import './BlueDice.scss';

export default class BlueDice extends Dice {
  constructor(){
    super();

    this.faces = [
      {hearts: 0, surge: 0, range: 0, miss: true },
      {hearts: 2, surge: 1, range: 2, miss: false },
      {hearts: 2, surge: 0, range: 3, miss: false },
      {hearts: 2, surge: 0, range: 4, miss: false },
      {hearts: 1, surge: 0, range: 5, miss: false },
      {hearts: 1, surge: 1, range: 6, miss: false }
    ];
  }

  render(){
    return (
      <div className="dice-container" data-index={this.props.index}>
        <div className="dice blue-dice"></div>

        <div className="remove-dice" onClick={this.handleRemove}><i className="fa fa-remove"></i></div>
        <div className="reroll-dice" onClick={this.handleReroll}><i className="fa fa-refresh"></i></div>
      </div>
    )
  }
}