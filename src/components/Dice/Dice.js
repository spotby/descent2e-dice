import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import './Dice.scss';

export default class Dice extends Component {
  constructor(){
    super();

    this.handleRemove = this.handleRemove.bind(this);
    this.handleReroll = this.handleReroll.bind(this);
  }
  roll(){

  }

  handleRemove(e){
    const index = $(e.target).parents('.dice-container').attr('data-index');
    this.props.handleRemove(index);
  }

  handleReroll(e){

  }
}

Dice.propTypes = {
  index: PropTypes.number,
  handleRemove: PropTypes.func,
  handleReroll: PropTypes.func
};