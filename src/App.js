// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  // a="Ravanang"
  state = {
    progress: 10
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={5}
            color='red'
            // color='#f11946'
            // progress={10}
            progress={this.state.progress}
          />
          <Routes>
            {/* <Route exact path="/"element={<Home showAlert={showAlert}/>}></Route> */}
            <Route exact path="/" element={<News setProgress={this.setProgress} key="general" country="in" category="General" />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" country="in" category="Business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" country="in" category="Entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" country="in" category="General" />}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" country="in" category="Health" />}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" country="in" category="Science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" country="in" category="Sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" country="in" category="Technology" />}></Route>
          </Routes>
        </Router>
      </div>
      // {/* Hiii Saurabh {this.a} !! */}
    )
  }
}
