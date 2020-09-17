const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};

const App = () => {
  return React.createElement('div', { id: 'important' }, [
    React.createElement('h1', {}, 'Adopt me!'),
    React.createElement(Pet, { name: 'Luna', animal: 'dog', breed: 'labra' }),
    React.createElement(Pet, { name: 'Pepper', animal: 'cat', breed: 'tiger' }),
    React.createElement(Pet, { name: 'Doink', animal: 'rat', breed: 'street' }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
