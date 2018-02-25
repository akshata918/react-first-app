import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class Nav extends Component {
  render() {
      return (
         <nav>
            <div className="logo"><img src={logo} /></div>
         
            <ul className="nav-right">
               <li>Home</li>
               <li>About</li>
               <li>Services</li>
               <li>Contact</li>
            </ul>
         </nav>
      );
   }
}

export class Body extends Component {
   render() {
      return (
         <section className="main-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </section>
         );
   }
}


export class Footer extends Component {
   render() {
      return (
         <p>&copy;2018 Copyrights reserved</p>
      );
   }
}

