import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Component/ValidationComponent';
import CharComponent from './Component/CharComponent';
class App extends Component {
  state = {
    inputString: ""
  }

  onInputChangeEvent = (event) => {
    var newInput = event.target.value;
    this.setState({inputString : newInput});
  }

  onCharClickEvent = (char) => {
    var inputArrary = [...this.state.inputString];
    var charIndex = inputArrary.findIndex((tempChar) => {
      return tempChar === char;
    });
    
    inputArrary.splice(charIndex, 1);

    var inputString = inputArrary.join('');
    console.log(typeof inputString)
    this.setState({inputString:inputString})
  }
  render() {
    
    return (
      <div className="App">
        <input onChange={(event) => this.onInputChangeEvent(event)}/>
        <p>{this.state.inputString.length}</p>
        <ValidationComponent length={this.state.inputString.length} />
        {this.state.inputString.split('').map(char => {
          return <CharComponent 
            char = {char} 
            click= {() => this.onCharClickEvent(char)} />
        })}
        <ol>
          <li>Create an input field (in App component) with a change listener
             which outputs the length of the entered text below it (e.g. in a 
             paragraph).</li>
          
          <li>Create a new component (=> ValidationComponent) which receives t
            he text length as a prop</li>
          
          <li>Inside the ValidationComponent, either output "Text too short" 
            or "Text long enough" depending on the text length (e.g. take 5 as 
            a minimum length)</li>
          
          <li>Create another component (=> CharComponent) and style it as an 
            inline box (=> display: inline-block, padding: 16px, text-align: 
            center, margin: 16px, border: 1px solid black).</li>
          
          <li>Render a list of CharComponents where each CharComponent 
            receives a different letter of the entered text (in the initial 
            input field) as a prop.</li>
          
          <li>When you click a CharComponent, it should be removed from the 
            entered text.</li>
        </ol>
      </div>
    );
  }
}

export default App;
