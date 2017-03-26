import React from 'react';
import logo from '../../public/logo.png';

export default function Header() {
  return (
    <div>
      <h2>Air Quality</h2>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
