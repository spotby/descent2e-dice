import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import './SelectedDice.scss';

import BlueDice from 'components/Dice/BlueDice/BlueDice';
import RedDice from 'components/Dice/RedDice/RedDice';
import YellowDice from 'components/Dice/YellowDice/YellowDice';
import GreenDice from 'components/Dice/GreenDice/GreenDice';
import GrayDice from 'components/Dice/GrayDice/GrayDice';
import BlackDice from 'components/Dice/BlackDice/BlackDice';
import BrownDice from 'components/Dice/BrownDice/BrownDice';

import {removeDice} from 'actions/Dice/DiceActions';

export default class SelectedDice extends Component {
  constructor(){
    super();

    this.displayDice = this.displayDice.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleReroll = this.handleReroll.bind(this);
  }

  render(){
    const dice = this.displayDice();

    return (
      <div className="selected-dice-container container-fluid">
        <p>Selected Dice</p>

        <div className="selected-dice">
          {dice}
        </div>
      </div>
    )
  }

  displayDice(){
    const context = this;
    const output = [];

    $.each(this.props.Dice.selected, function(i, item){
      if(item.color == 'blue'){
        output.push(<BlueDice key={i} index={i} handleRemove={context.handleRemove} handleReroll={context.handleReroll} />);
      }
      else if(item.color == 'red'){
        output.push(<RedDice key={i} index={i} handleRemove={context.handleRemove} handleReroll={context.handleReroll} />);
      }
      else if(item.color == 'yellow'){
        output.push(<YellowDice key={i} index={i} handleRemove={context.handleRemove} handleReroll={context.handleReroll} />);
      }
      else if(item.color == 'green'){
        output.push(<GreenDice key={i} index={i} handleRemove={context.handleRemove} handleReroll={context.handleReroll} />);
      }
      else if(item.color == 'gray'){
        output.push(<GrayDice key={i} index={i} handleRemove={context.handleRemove} handleReroll={context.handleReroll} />);
      }
      else if(item.color == 'black'){
        output.push(<BlackDice key={i} index={i} handleRemove={context.handleRemove} handleReroll={context.handleReroll} />);
      }
      else if(item.color == 'brown'){
        output.push(<BrownDice key={i} index={i} handleRemove={context.handleRemove} handleReroll={context.handleReroll} />);
      }
    });

    return output;
  }

  handleRemove(index){
    this.props.dispatch(removeDice(index));
  }
  handleReroll(index){
    //this.props.dispatch(removeDice(index));
  }
}

SelectedDice.propTypes = {};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(SelectedDice);