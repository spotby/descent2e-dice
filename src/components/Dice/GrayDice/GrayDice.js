import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Dice from 'components/Dice/Dice';

export default class GrayDice extends Dice {
  render(){
    return (
      <div className="dice gray-dice">
        gray dice
      </div>
    )
  }
}