import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { animals, birds } from './animalsList.js'
import Header from './components/Header'
import Subtype from './pages/Subtype'
import Home from "./pages/Home";


class App extends Component {
  state = {
    birds: birds,
    animals: animals,
    title: 'Living world',
    searchInput: ''
  }

  removeHandler = (name, type) => {
    const updatedArray = this.state[type].filter(creature => creature.name !== name)
    this.setState({
      [type]: updatedArray
    })
  }

  LikesHandler = (name, action, type) => {
    console.log(name, action, type)
    // here we use function inside the setState
    this.setState((prevState) => {  // prevState is a current state, prevState is not a reserved word
      const updatedArray = prevState[type].map((creature) => {
        if (creature.name === name) {
          if (action === '+') {
            return { ...creature, likes: creature.likes + 1 } // by "..." we spread (open or, you may say, getting access to) animal object to change the data (likes)
          } else {
            return { ...creature, likes: creature.likes - 1 }
          }
        } else {
          return creature
        }
      })
      return {
        [type]: updatedArray
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
            <Subtype
              data={this.state.animals}
              type={'animals'}
              removeHandler={this.removeHandler}
              LikesHandler={this.LikesHandler}
              searchHandler={this.searchHandler}
              searchInput={this.state.searchInput} />
          } />
          <Route path="/birds" element={
            <Subtype
              data={this.state.birds}
              type={'birds'}
              removeHandler={this.removeHandler}
              LikesHandler={this.LikesHandler}
              searchHandler={this.searchHandler}
              searchInput={this.state.searchInput} />
          } />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
