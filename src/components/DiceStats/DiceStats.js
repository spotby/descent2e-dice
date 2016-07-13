import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {showStatsMobile, hideStatsMobile} from 'actions/Dice/DiceActions';

import './DiceStats.scss';

export default class DiceStats extends Component {
  constructor(){
    super();
    this.handleShowStats = this.handleShowStats.bind(this);
    this.handleHideStats = this.handleHideStats.bind(this);
  }

  render(){
    return (
      <div className="col-xs-12 col-sm-6 col-md-6">
        <div className={(this.props.Dice.showStatsMobile) ? "show-stats-button-container hide" : "show-stats-button-container visible-xs"} >
          <button className="btn btn-default" onClick={this.handleShowStats}>Show Stats</button>
        </div>
        <div className={(this.props.Dice.showStatsMobile) ? "dice-stats-container" : "dice-stats-container hidden-xs "} >
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Stats</th>
                <th><i className="fa fa-heart"></i></th>
                <th><i className="fa fa-bolt"></i></th>
                <th><i className="fa fa-bow-arrow white"></i></th>
                <th><i className="fa fa-shield"></i></th>
                <th><i className="fa fa-remove"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Min</th>
                <td>{this.props.Dice.stats.hearts.min}</td>
                <td>{this.props.Dice.stats.surges.min}</td>
                <td>{this.props.Dice.stats.range.min}</td>
                <td>{this.props.Dice.stats.shields.min}</td>
                <td></td>
              </tr>
              <tr>
                <th>Max</th>
                <td>{this.props.Dice.stats.hearts.max}</td>
                <td>{this.props.Dice.stats.surges.max}</td>
                <td>{this.props.Dice.stats.range.max}</td>
                <td>{this.props.Dice.stats.shields.max}</td>
                <td></td>
              </tr>
              <tr>
                <th>Avg</th>
                <td>{this.props.Dice.stats.hearts.avg.toFixed(2)}</td>
                <td>{this.props.Dice.stats.surges.avg.toFixed(2)}</td>
                <td>{this.props.Dice.stats.range.avg.toFixed(2)}</td>
                <td>{this.props.Dice.stats.shields.avg.toFixed(2)}</td>
                <td>0.17</td>
              </tr>
            </tbody>
          </table>
          <div className="hide-stats-button-container visible-xs ">
            <button className="btn btn-default" onClick={this.handleHideStats}>Hide Stats</button>
          </div>
        </div>
      </div>
    )
  }

  handleShowStats(){
    this.props.dispatch(showStatsMobile());
  }

  handleHideStats(){
    this.props.dispatch(hideStatsMobile());
  }
}

DiceStats.propTypes = {};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return {Dice: state.Dice};
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(DiceStats);
