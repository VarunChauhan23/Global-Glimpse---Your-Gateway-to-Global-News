import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: 'light',
      progress: 0
    };
  }

  setProgress = (progress) => {
    this.setState({progress: progress});
  }

  handleDarkMode = () => {

    if (this.state.mode === 'light') {
      this.setState({
        mode: 'dark'
      });
      document.body.style.backgroundColor = "#33628d";
    } else {
      this.setState({
        mode: 'light'
      });
      document.body.style.backgroundColor = "white";
    }
  }

  render() {
    return (
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
        <NavBar mode={this.state.mode} toggleMode={this.handleDarkMode} />
        <Routes>
          <Route path='/' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="general" pageSize="10" category="general" />} />
          <Route path='/business' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="business" pageSize="10" category="business" />} />
          <Route path='/entertainment' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="entertainment" pageSize="10" category="entertainment" />} />
          <Route path='/health' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="health" pageSize="10" category="health" />} />
          <Route path='/science' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="science" pageSize="10" category="science" />} />
          <Route path='/sports' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="sports" pageSize="10" category="sports" />} />
          <Route path='/technology' element={<News setProgress={this.setProgress}  mode={this.state.mode} key="technology" pageSize="10" category="technology" />} />
        </Routes>
      </Router>
    )
  }
}

export default App
