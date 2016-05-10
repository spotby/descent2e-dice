import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import './Dice.scss';

import {removeDice, rerollDice, clearDice, calcTotals} from 'actions/Dice/DiceActions';

export default class Dice extends Component {
  constructor(){
    super();

    this.handleRemove = this.handleRemove.bind(this);
    this.handleReroll = this.handleReroll.bind(this);
    this.displayFace = this.displayFace.bind(this);
  }
  componentDidMount(){

  }

  render(){
    let face;
    if(this.props.diceData.face){
      face = this.displayFace(this.props.diceData);
    }

    return (
      <div className="dice-container" data-index={this.props.index}>
        <div className={"dice "+this.props.diceData.color+"-dice"}>
          {face}
        </div>

        <div className="remove-dice" onClick={this.handleRemove}>
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-remove fa-stack-1x"></i>
          </span>
        </div>
        <div className="reroll-dice" onClick={this.handleReroll}><i className="fa fa-refresh fa-fw"></i></div>
      </div>
    )
  }

  handleRemove(e){
    const index = $(e.target).parents('.dice-container').attr('data-index');
    this.props.dispatch(removeDice(index));
    this.props.dispatch(calcTotals());
  }

  handleReroll(e){
    const context = this;

    const icon = $(e.target).parents('.dice-container').find('.fa-refresh');

    if(!icon.hasClass('disabled')){
      icon.addClass('disabled');
      icon.addClass('fa-spin');

      const index = $(e.target).parents('.dice-container').attr('data-index');
      this.props.dispatch(clearDice(index));

      setTimeout(function(){
        context.props.dispatch(rerollDice(index));
        context.props.dispatch(calcTotals());
        icon.removeClass('fa-spin');
        icon.removeClass('disabled');
      },  750);
    }

  }

  displayFace(data){
    let output;

    if(data.type == 'offense'){
      if(data.face.miss){
        output = (
          <div className="offense">
            <div className="miss">
              <i className="fa fa-remove"></i>
            </div>
          </div>
        );
      }
      else{
        output = (
          <div className={(data.face.range != 0) ? "offense with-range" : "offense no-range"}>
            {(data.face.range != 0) ?
              <div className="range">
                {data.face.range}
              </div>
              : null
            }

            {this.outputHearts(data)}
            {this.outputSurges(data)}
          </div>
        );
      }
    }
    else{
      output = (
        <div className="defense">
          {this.outputShields(data)}
        </div>
      );
    }

    return output;
  }

  outputHearts(data){
    const hearts = [];

    for(var i = 0; i < data.face.hearts; i++){
      hearts .push(<i key={i} className={"fa fa-heart heart heart-"+(i+1)}></i>);
    }

    return <div className={(data.face.surges) ? "hearts hearts-"+data.face.hearts+ " with-surges" : "hearts hearts-"+data.face.hearts+" no-surges"}>
      {hearts}
    </div>;
  }

  outputSurges(data){
    const surges = [];

    for(var i = 0; i < data.face.surges; i++){
      surges.push(<i key={i} className={"fa fa-bolt surge surge-"+(i+1)}></i>);
    }

    return <div className={(data.face.hearts) ? "surges surges-"+data.face.surges+" with-hearts with-hearts-"+data.face.hearts : "surges surges-"+data.face.surges+" no-hearts"  }>{surges}</div>;
  }

  outputShields(data){
    const shields = [];

    for(var i = 0; i < data.face.shields; i++){
      shields.push(<i key={i} className={"fa fa-shield shield shield-"+(i+1)}></i>);
    }

    return <div className={"shields shields-"+data.face.shields}>{shields}</div>;
  }
}

Dice.propTypes = {
  index: PropTypes.number
};