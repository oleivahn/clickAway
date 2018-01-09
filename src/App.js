import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from './components/Navbar';
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    counter : 0,
    guessed :[],
  };

// removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
// const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
//   this.setState({ friends });
// };

checkGuess = id => {
    const tempGuess = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ guessed : (this.state.tempGuess)});
    console.log(tempGuess);


}



randomize = id => {
    this.checkGuess(id);
    // this.setState({counter : this.state.counter + 1 });
    // console.log(counter);
    //This function randomizes the array.
    const friends = this.state.friends;
    let i = friends.length;
    // console.log(i);
    let j;
    let temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = friends[j];
        // console.log(j);
        friends[j] = friends[i];
        friends[i] = temp;

    }
    // Set this.state.friends equal to the new randomized array
    this.setState({ friends });
    // console.log( friends);





  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
          {/* <Navbar
            score={this.state.score}
            topScore={this.state.topScore}
            message={this.state.message}
          /> */}
        <Title score={this.state.score}
        topScore={this.state.topScore}
        message={this.state.message}>Don't click the same twice!</Title>
        {this.state.friends.map(friend => (
          <FriendCard //passing props
            randomize={this.randomize}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location} //end passing props
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
