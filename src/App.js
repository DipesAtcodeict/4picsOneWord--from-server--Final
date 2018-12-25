import React, { Component } from "react";
import axios from "axios";

import Header from "./Components/Header/header";
import Playground from "./Components/Playground/playground";
import ScoreCard from "./Components/Footer/footer";

let next = 1;

class App extends Component {
  state = {
    answer: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    id: 1
  };

  componentWillMount = () => {
    axios
      .get(`http://localhost:3004/q${next}`)
      .then(response => {
        this.setState({
          answer: response.data.answer,
          id: response.data.id,
          image1: response.data.images[0],
          image2: response.data.images[1],
          image3: response.data.images[2],
          image4: response.data.images[3]
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = event => {
    let answer = event.target.value;
    if (answer === this.state.answer) {
      this.fetchNext();
    }
  };

  fetchNext = () => {
    next++;
    axios
      .get(`http://localhost:3004/q${next}`)
      .then(response => {
        this.setState({
          answer: response.data.answer,
          id: response.data.id,
          image1: response.data.images[0],
          image2: response.data.images[1],
          image3: response.data.images[2],
          image4: response.data.images[3]
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <Playground {...this.state} renderNext={this.handleChange} />
        <ScoreCard score={this.state.id} />
      </div>
    );
  }
}

export default App;
