/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
        <nav className="blue">
            <div className="nav-wrapper">
              <a href="#" className="center brand-logo">Google Booklibrary</a>
              <ul>
                  <li><a href="/">Search</a></li>
                  <li><a href="/list">List</a></li>
              </ul>
            </div>
        </nav>
        )
    }
}

export default Nav;