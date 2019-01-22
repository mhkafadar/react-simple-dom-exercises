import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'asdf1', name: 'Mehmet', age: 25},
      { id:'asdffv', name: 'Ahmet', age: 22},
      { id:'sdf', name: 'Veli', age: 21}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons: persons});


  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
         <div>
           {this.state.persons.map((person, i) => {
             return <Person
                 key={person.id}
                 click={() => this.deletePersonHandler(i)}
                 name={person.name}
                 age={person.age}
                 changed={(event) => this.nameChangedHandler(event, person.id)} />
           })}
         </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p>It is really working!</p>
        <button
            style={style}
            onClick={this.togglePersonsHandler}>Surpise</button>
        {persons}
      </div>
    );
  }
}

export default App;

// same but bind method is better.