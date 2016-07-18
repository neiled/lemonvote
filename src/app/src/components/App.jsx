import React from 'react';  
import Todo from './Todo.jsx';
import Nav from './Nav.jsx';

export default class App extends React.Component {  
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <Todo />
        </div>
      </div>
    );
  }
}
