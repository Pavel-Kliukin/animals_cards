import React, { Component } from "react";
import './App.css';
import { animals } from './animalsList.js'
import Header from './Header'
import Animals from './Animals'


class App extends Component {
  state = {
    animals: animals,
    title: 'Living world',
    searchInput: ''
  }

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(animal => animal.name !== name)
    this.setState({
      animals: updatedArray
    })
  }

  LikesHandler = (name, action) => {
    // here we use function inside the setState
    this.setState((prevState) => {  // prevState is a current state, prevState is not a reserved word
      const updatedArray = prevState.animals.map((animal) => {
        if (animal.name === name) {
          if (action === '+') {
            return { ...animal, likes: animal.likes + 1 } // by "..." we spread (open or, you may say, getting access to) animal object to change the data (likes)
          } else {
            return { ...animal, likes: animal.likes - 1 }
          }
        } else {
          return animal
        }
      })
      return {
        animals: updatedArray
      }
    })
  }

  searchHandler = (e) => { // e - event
    this.setState({
      searchInput: e.target.value
    })
  }

  render () {
    return (
      <div>
        <Header title={this.state.title} />
        <Animals
          data={this.state.animals}
          removeHandler={this.removeHandler}
          LikesHandler={this.LikesHandler}
          searchHandler={this.searchHandler}
          searchInput={this.state.searchInput} />
      </div>
    );
  }
}

export default App;
