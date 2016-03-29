import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import './DiceSelector.scss';

export default class DiceSelector extends Component {
  render(){
    return (
      <div className="dice-selector-container container-fluid">
        <p>Select your dice</p>
      </div>
    )
  }
}