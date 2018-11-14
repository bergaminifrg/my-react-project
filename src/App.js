import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "121212", name: "Max", age: 28 },
      { id: "454545", name: "Manu", age: 29 },
      { id: "a78787", name: "Joe", age: 27 }
    ],
    showPersons: false
  };

  deletePersonsHandler = personIndex => {
    const persons = [...this.state.persons]; // Clone original state
    persons.splice(personIndex, 1); // Remove element
    this.setState({ persons: persons }); // Set new State
  };

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid black",
      padding: "8px",
      margin: "10px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, go fuck yourself</h1>
        <p className={classes.join(" ")}> Really, do this.</p>
        <button style={style} onClick={this.tooglePersonsHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
