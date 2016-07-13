import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import './BottomBar.scss';

import {rollDice, resetDice, clearAllDice, calcTotals, clearTotals} from 'actions/Dice/DiceActions';

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
        <button className="btn btn-default reset-btn" onClick={this.handleReset}>Reset</button>

        {this.outputTotals(this.props.Dice.totals)}
      </div>
    )
  }

  outputTotals(totals){
    const output = [];
    let oTotal;
    let dTotal;

    if(totals){
      if(totals.offense){
        var x;
        if(totals.miss){
          x = <div className="miss">MISS!</div>
        }
        else{
          x = <div>
            <div className="hearts" title="Hearts"><i className="fa fa-heart"></i> {totals.hearts}</div>
            <div className="surges" title="Surges"><i className="fa fa-bolt"></i> {totals.surges}</div>
            <div className="range" title="Range"><i className="fa fa-bow-arrow"></i> {totals.range}</div>
          </div>
        }

        oTotal = (
          <div className="offense-total">
            {x}
          </div>
        );
      }

      if(totals.defense){
        dTotal = (
          <div className="defense-total">
            <div className="shields" title="Defense"><i className="fa fa-shield"></i> {totals.shields}</div>
          </div>
        );
      }

      output.push(<div className="totals" key="1">{oTotal}{dTotal}</div>);
    }

    return output;
  }

  handleRoll(e){
    const context = this;
    let target;
    if($(e.target).hasClass('btn')){
      target = $(e.target);
    }
    else{
      target = $(e.target).parent('.btn');
    }

    this.props.dispatch(clearAllDice());

    if(!target.hasClass('disabled')){
      target.addClass('disabled');

      target.html("<i class='fa fa-spinner fa-spin'></i>");

      setTimeout(function(){
        context.props.dispatch(rollDice());
        context.props.dispatch(calcTotals());
        context.handleResize();

        target.html("Roll");
        target.removeClass('disabled');
      }, 250);
    }
  }

  handleReset(e){
    this.props.dispatch(resetDice());
    this.props.dispatch(clearTotals());
    context.handleResize();
  }
}

BottomBar.propTypes = {};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(BottomBar);