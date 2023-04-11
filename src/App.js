import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { animals } from './animalsList.js'
import { birds } from './animalsList.js'
import Header from './Header'
import Animals from './Animals'
import Birds from './Birds'
import Home from "./Home";


class App extends Component {
  state = {
    birds: birds,
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
      <BrowserRouter>
        <div>
          <Header title={this.state.title} />
        </div>
        <Routes>
          <Route path="/" element={
            <Home
              animalslink={
                <NavLink to="/animals">
                  ANIMALS
                </NavLink>}
              birdslink={
                <NavLink to="/birds">
                  BIRDS
                </NavLink>} />} />
          <Route path="/animals" element={
            <Animals
              data={this.state.animals}
              removeHandler={this.removeHandler}
              LikesHandler={this.LikesHandler}
              searchHandler={this.searchHandler}
              searchInput={this.state.searchInput} />} />
          <Route path="/birds" element={<Animals
            data={this.state.birds}
            removeHandler={this.removeHandler}
            LikesHandler={this.LikesHandler}
            searchHandler={this.searchHandler}
            searchInput={this.state.searchInput} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
