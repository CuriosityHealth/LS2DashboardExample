import * as React from 'react';
import account_blue from '../images/account_blue.png';
import account_grey from '../images/account_grey.png';
import logo from '../images/full_logo.png';

import './NavBar.css'

export interface INavBarProps {
  isSignedIn: boolean;
}

const NavBar = ({ isSignedIn }: INavBarProps) => {

    const image = isSignedIn ? account_blue : account_grey;

    return (
        <div>
        <nav className="pt-navbar ch-navbar">
          <div className="pt-navbar-group ch-navbar-group pt-align-left">
            <img className="ch-navbar-logo" alt="Curiosity Health" src={logo} />
            <span className="pt-navbar-divider" />
          </div>
          <div className="pt-navbar-group ch-navbar-group pt-align-right">
            <span className="pt-navbar-divider" />
            <img alt="account" className="account-image" src={image} />
          </div>
        </nav>
      </div>
    );
}

export default NavBar;