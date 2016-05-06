import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import './BottomBar.scss';

import {rollDice, resetDice} from 'actions/Dice/DiceActions';

export default class BottomBar extends Component {
  constructor(){
    super();

    this.handleRoll = this.handleRoll.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  
  componentDidMount() {
    this.handleResize();

    window.addEventListener('resize', this.handleResize);
  }

  componentWillReceiveProps(){
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize(){
    $('.bottom-bar').css('position', 'static');
    $('body').css('marginBottom', 0);

    if(window.innerHeight < $(document).height() ){
      $('.bottom-bar').css('position', 'fixed');

      const h = $('.bottom-bar').outerHeight();
      $('body').css('marginBottom', h);
    }
  }

  render(){
    return (
      <div className={(this.props.Dice.selected.length) ? "bottom-bar container-fluid" : "bottom-bar container-fluid hide"}>
        <button className="btn btn-success roll-btn" onClick={this.handleRoll}>Roll</button>
        <button className="btn btn-default" onClick={this.handleReset}>Reset</button>
      </div>
    )
  }

  handleRoll(e){
    this.props.dispatch(rollDice());
    
    const target = $(e.target);
    target.html("<img src='/img/ajax-loader-green.gif' />");
    setTimeout(function(){
      target.html("Roll");
    }, 500);
  }

  handleReset(e){
    this.props.dispatch(resetDice());
  }
}

BottomBar.propTypes = {};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(BottomBar);