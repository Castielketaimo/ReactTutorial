import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Cass', age: 34}
    ],
    otherState:'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked!');
    this.setState({persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Cass', age: 34}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Max', age: 28},
      { name: event.target.value, age: 29},
      { name: 'Cass', age: 34}
    ],
    showPersons: false
  })
  }


  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }
  render() {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
              <Person 
              name={this.state.persons[0].name} 
              age = {this.state.persons[0].age}>My Hobbie: Racing</Person>
              <Person 
              name={this.state.persons[1].name} 
              age = {this.state.persons[1].age}
              click = {this.switchNameHandler.bind(this, 'Max!')}
              changed = {this.nameChangedHandler}></Person>
              <Person 
              name={this.state.persons[2].name} 
              age = {this.state.persons[2].age}></Person>
            </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi its me</h1>
        <button 
          style= {style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'test'));
  }
}

export default App;
