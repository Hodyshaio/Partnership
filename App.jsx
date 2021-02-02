import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Client/Home/Home';
import Questions from './Client/Questions/Questions';
import Answer from './Client/Answer/Answer';
import User from './Client/Users/User';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = { apiResponse: "" }
  }

  // callAPI() {
  //   fetch("http://localhost:9000/questions")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res}));
  // }

  // componentWillMount() {
  //   this.callAPI();
  //   console.log('componentWillMount');
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Home} exact />
          <Route path="/allQuestions" component={Questions} />
          <Route path="/answer" component={Answer} />
          {/* <Route path="/users" component={User} /> */}
        </div>
        {/* <p className="App-intro">{this.state.apiResponse}</p> */}
      </BrowserRouter>

    );
  }
}

export default App;

