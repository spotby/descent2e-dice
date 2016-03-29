import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import './TopBar.scss';

import {basePath} from '../../routes.js';

export default class TopBar extends Component {
  render(){
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".collapse.navbar-collapse" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className={this.props.location.pathname == basePath + '/' ? 'active' : ''}><Link to={basePath + '/'}>Descent 2nd Edition Dice</Link></li>
            <li className={this.props.location.pathname == basePath + '/about' ? 'active' : ''}><Link to={basePath + '/about'}>About</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}