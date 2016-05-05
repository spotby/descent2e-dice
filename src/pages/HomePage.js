import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {tester} from '../actions/App/AppActions';

import DiceSelector from 'components/DiceSelector/DiceSelector.js';
import SelectedDice from 'components/SelectedDice/SelectedDice.js';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    //this.handleSetMode = this.handleSetMode.bind(this);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <DiceSelector />
        <SelectedDice />
      </div>
    );
  }
}

HomePage.propTypes = {};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(HomePage);
