import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayQuote from "./components/DisplayQuote";
import Axios from "axios";

const simpsonTest = {
  character: "Toto",
  quote: "Salut les blaireaux",
  image:
    "https://www.journaldemickey.com/sites/default/files/styles/large/public/actualites/Toto2.jpg?itok=HrhXUjYA",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: simpsonTest,
    };
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    Axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          simpson: data[0],
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <DisplayQuote simpson={this.state.simpson} />
        <button type='button' onClick={this.getSimpson}>
          Nouvelle citation
        </button>
      </div>
    );
  }
}

export default App;
