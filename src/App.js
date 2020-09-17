import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1 id="something important">Adopt me</h1>
      <Pet name="Luna" animal="Dog" breed="Labra" />
      <Pet name="Peppa" animal="Bird" breed="Parrot" />
      <Pet name="Lara" animal="Cat" breed="Tiger" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
