import React from 'react';
import './App.css';
import reactLogo from './assets/img/icon-react-coloured.svg';

function App() {

  const title = React.createElement('h2', {}, 'Hello React!');
  const logoImg = React.createElement('img', {src: reactLogo, alt: 'logo'}, null);
  const paragraph = React.createElement('p', {}, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ipsum.');

  return (
    <>
      <h2>Hello React!</h2>
      <img src={reactLogo} alt="logo" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ipsum.</p>
      {title}
      {logoImg}
      {paragraph}
    </>
  )
}

export default App
