import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Dice from 'components/Dice/Dice';

export default class RedDice extends Dice {
  render(){
    return (
      <div className="dice red-dice">
        red dice
      </div>
    )
  }
}