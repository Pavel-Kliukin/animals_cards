import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { animals } from './animalsList.js'
import { birds } from './animalsList.js'
import Header from './components/Header'
import Animals from './pages/Animals'
import Birds from './pages/Birds'
import Home from "./pages/Home";


class App extends Component {
  state = {
    birds: birds,
    animals: animals,
    title: 'Living world',
    searchInput: ''
  }

  // FUNCTIONS FOR ANIMALS

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

  // FUNCTIONS FOR BIRDS

  removeHandlerB = (name) => {
    const updatedArray = this.state.birds.filter(animal => animal.name !== name)
    this.setState({
      birds: updatedArray
    })
  }

  LikesHandlerB = (name, action) => {
    // here we use function inside the setState
    this.setState((prevState) => {  // prevState is a current state, prevState is not a reserved word
      const updatedArray = prevState.birds.map((animal) => {
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
        birds: updatedArray
      }
    })
  }

  // SEARCH FOR ANIMALS AND BIRDS
  searchHandler = (e) => { // e - event
    this.setState({
      searchInput: e.target.value
    })
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <Header
            title={this.state.title}
            home={<NavLink to="/">Home</NavLink>}
            animals={<NavLink to="/animals">Animals</NavLink>}
            aCount={this.state.animals.length}
            birds={<NavLink to="/birds">Birds</NavLink>}
            bCount={this.state.birds.length}
          />
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
          <Route path="/birds" element={<Birds
            data={this.state.birds}
            removeHandlerB={this.removeHandlerB}
            LikesHandlerB={this.LikesHandlerB}
            searchHandler={this.searchHandler}
            searchInput={this.state.searchInput} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
